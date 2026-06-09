# DEPLOYMENT.md

## Назначение

Инструкция для деплоя проекта `sk-develop` как Vite React SPA через Docker и Nginx.

Проект не требует backend, базы данных или отдельного Node.js-сервера в production. В Docker production-сборка выполняется внутри build-stage, а Nginx в финальном контейнере отдаёт содержимое папки `dist/`.

## Локальная проверка

```bash
npm install
npm run build
npm run preview
docker build -t sk-develop .
docker run --rm -p 8080:80 sk-develop
```

После `npm run build` должна появиться папка:

```text
dist/
```

После запуска контейнера проверить:

```bash
curl -I http://localhost:8080/
curl -I http://localhost:8080/test-route
```

Ожидаемо оба запроса возвращают HTTP `200 OK`. Для произвольного SPA-маршрута Nginx должен отдавать `index.html`, а не серверный 404.

## Docker-сборка

В корне проекта находятся:

```text
Dockerfile
.dockerignore
nginx.conf
```

Схема:

```text
node:20-alpine
  -> npm ci
  -> npm run build
  -> dist/
nginx:1.27-alpine
  -> /usr/share/nginx/html
  -> nginx.conf with SPA fallback
```

## Первый Docker-деплой

Выполнено 9 июня 2026 года на сервере `178.212.12.239` через SSH alias `sk-develop`.

- проект на сервере: `/opt/sk-develop`;
- исходная серверная копия склонирована из `https://github.com/asruzela-sketch/sk-develop`;
- Docker-файлы, контекстные markdown-файлы и синхронизированный `package-lock.json` перенесены поверх серверной рабочей копии, потому что текущий GitHub-доступ имеет только `pull` и не позволяет сделать `push` в `asruzela-sketch/sk-develop`;
- образ: `sk-develop:latest`;
- image id: `4e2b2f9f441e`;
- контейнер: `sk-develop`;
- restart policy: `unless-stopped`;
- публикация порта: `0.0.0.0:80->80/tcp`, `[::]:80->80/tcp`;
- host-level Nginx на сервере не активен;
- домен не подключался;
- SSL не настраивался.

Проверки после запуска:

```bash
docker ps --filter name=sk-develop
curl -I http://localhost
curl -I http://178.212.12.239
```

Результат:

- `docker ps` показывает контейнер `sk-develop` в статусе `Up`;
- `curl -I http://localhost` возвращает `HTTP/1.1 200 OK`;
- `curl -I http://178.212.12.239` возвращает `HTTP/1.1 200 OK`;
- главная страница открывается в браузере по `http://178.212.12.239/`.

## Подготовка сервера

Ожидаемый сервер:

- Ubuntu 22.04 или 24.04;
- SSH-доступ;
- root или пользователь с sudo;
- Nginx.

Текущий сервер:

- IP: `178.212.12.239`;
- ОС: Ubuntu 24.04.3 LTS;
- SSH alias: `sk-develop`;
- пользователь: `root`;
- ключ: `~/.ssh/sk_develop_deploy`;
- Docker Engine, Buildx и Docker Compose plugin установлены.

Установить базовые пакеты:

```bash
sudo apt update
sudo apt install -y nginx git curl
```

Node.js нужен только если сборка выполняется на сервере. Если загружать уже готовую папку `dist/`, Node.js на сервере не обязателен.

## Вариант A: Docker-сборка на сервере

```bash
cd /var/www
sudo git clone https://github.com/asruzela-sketch/sk-develop.git
sudo chown -R $USER:$USER /var/www/sk-develop
cd /var/www/sk-develop
docker build -t sk-develop .
docker run -d --name sk-develop --restart unless-stopped -p 80:80 sk-develop
```

## Вариант B: локальная Docker-сборка и перенос образа

```bash
docker build -t sk-develop .
docker save sk-develop | gzip > sk-develop.tar.gz
scp sk-develop.tar.gz root@SERVER_IP:/root/
```

На сервере:

```bash
gunzip -c /root/sk-develop.tar.gz | docker load
docker run -d --name sk-develop --restart unless-stopped -p 80:80 sk-develop
```

## Nginx-конфиг

Для контейнера используется файл `nginx.conf`:

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|ico|mp4|mov|woff2?)$ {
        expires 30d;
        access_log off;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

При использовании host-level Nginx как reverse proxy к контейнеру его конфиг настраивается отдельно после выбора домена и HTTPS.

## Проверка после деплоя

```bash
curl -I http://SERVER_IP
```

Проверить в браузере:

- главная страница открывается;
- изображения отображаются;
- видео загружается;
- перезагрузка произвольного SPA-маршрута не даёт 404;
- DevTools Console без критических ошибок.

## После подключения домена

- Обновить `server_name` в Nginx.
- Настроить DNS A-запись на IP сервера.
- Выпустить HTTPS-сертификат через Certbot или другой согласованный способ.
- Повторить проверку главной страницы, ассетов и SPA fallback.
