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
curl -I http://localhost:8080/video/sk-develop.mp4
curl -I http://localhost:8080/video/sk-develop.webm
```

Ожидаемо все запросы возвращают HTTP `200 OK`. Для произвольного SPA-маршрута Nginx должен отдавать `index.html`, а не серверный 404. Для видео ожидаются `Content-Type: video/mp4` и `Content-Type: video/webm`, cache headers и поддержка range-запросов.

## Правило фиксации изменений

После каждого изменения проекта перед деплоем нужно сделать Git-коммит с понятным сообщением. На production должно переноситься только зафиксированное в Git состояние.

## Последний production-деплой

Выполнен 28 июля 2026 года для коммита `de9c5b9` (`fix: prevent video reload on viewport transitions`).

- чистый Git-архив коммита развёрнут в `/opt/sk-develop-releases/de9c5b9`;
- собран образ `sk-develop:de9c5b9` с OCI label `org.opencontainers.image.revision=de9c5b9`;
- production-контейнер `sk-develop` запущен с `--restart unless-stopped` и публикацией `127.0.0.1:8080:80`;
- предыдущий контейнер сохранён остановленным как `sk-develop-backup-ca5bc01`;
- основной домен, `www`, SPA fallback, MP4/WebM, cache policy и range-запрос MP4 проверены после переключения;
- в браузере проверен сценарий первого входа видео в viewport, остановки при уходе и повторного запуска при возврате;
- в Console браузера нет ошибок.

Публичные результаты проверки:

- HTTP основного домена и `www`: `301 Moved Permanently`;
- HTTPS основного домена и `www`: `200 OK`;
- `/test-route`: `200 OK`;
- HTML: `Cache-Control: no-cache, no-store, must-revalidate`;
- hashed JS: `Cache-Control: public, max-age=31536000, immutable`;
- range-запрос MP4: `206 Partial Content`.

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
- исходная публикация порта: `0.0.0.0:80->80/tcp`, `[::]:80->80/tcp`;
- host-level Nginx на сервере на первом этапе не был активен;
- домен и SSL на первом этапе не настраивались.

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

## Production HTTPS

Настроено 9 июня 2026 года для домена:

- Unicode: `снк-девелоперскийпроект.рф`;
- Punycode: `xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai`;
- `www`: `www.xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai`;
- DNS A-записи основного домена и `www` указывают на `178.212.12.239`.

Актуальная схема:

```text
Internet
  -> host-level Nginx :80/:443
  -> reverse proxy http://127.0.0.1:8080
  -> Docker container sk-develop :80
```

Контейнер теперь публикуется только на localhost:

```bash
docker run -d --name sk-develop --restart unless-stopped -p 127.0.0.1:8080:80 sk-develop:latest
```

Host-level Nginx установлен и включён в автозапуск. Конфиг сайта:

```text
/etc/nginx/sites-available/sk-develop
/etc/nginx/sites-enabled/sk-develop
```

10 июля 2026 года в host-level Nginx добавлена публичная cache policy:

- `/` и `/index.html`: `Cache-Control: no-cache, no-store, must-revalidate`, `Pragma: no-cache`, `Expires: 0`;
- hashed JS/CSS в `/assets/`: `Cache-Control: public, max-age=31536000, immutable`;
- изображения, SVG, иконки и видео: `Cache-Control: public, max-age=86400` без `immutable`;
- upstream-заголовки `Cache-Control` и `Expires` от контейнера скрываются через `proxy_hide_header`, чтобы не было дублей и конфликтов.

Let's Encrypt сертификат выпущен через Certbot:

- certificate name: `xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai`;
- key type: `ECDSA`;
- issuer: `Let's Encrypt YE2`;
- domains: `xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai`, `www.xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai`;
- certificate path: `/etc/letsencrypt/live/xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/fullchain.pem`;
- private key path: `/etc/letsencrypt/live/xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/privkey.pem`;
- valid from: `2026-06-09 13:48:59 UTC`;
- expires: `2026-09-07 13:48:58 UTC`.

Автообновление:

- `certbot.timer` включён и активен;
- `certbot renew --dry-run --no-random-sleep-on-renew` завершился успешно;
- Certbot управляет HTTPS-блоком и HTTP -> HTTPS редиректом в Nginx-конфиге.

Проверки после настройки:

```bash
curl -I http://xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/
curl -I http://www.xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/
curl -I https://xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/
curl -I https://www.xn----dtbfebaaxjcgdhvwemepeem5a.xn--p1ai/
```

Результат:

- HTTP для основного домена возвращает `301 Moved Permanently` на HTTPS;
- HTTP для `www` возвращает `301 Moved Permanently` на HTTPS;
- HTTPS для основного домена возвращает `HTTP/1.1 200 OK`;
- HTTPS для `www` возвращает `HTTP/1.1 200 OK`;
- `openssl s_client -verify_return_error` возвращает `Verification: OK` и `Verify return code: 0 (ok)`.
- браузер открывает HTTPS-страницу сайта, предупреждение о небезопасном подключении не отображается.

Проверки устойчивости:

- после `systemctl restart docker` контейнер `sk-develop` автоматически поднялся с `127.0.0.1:8080->80/tcp`, сайт по HTTPS вернул `200 OK`;
- после `reboot` сервера Docker и Nginx активны и включены в автозапуск, контейнер поднялся автоматически, оба HTTPS-адреса вернули `200 OK`.

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

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|ico|mp4|mov|webm|woff2?)$ {
        expires 30d;
        access_log off;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

При использовании host-level Nginx как reverse proxy к контейнеру публичная cache policy настраивается в `/etc/nginx/sites-available/sk-develop`. После изменения host-level конфига обязательно выполнить:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Проверка после деплоя

```bash
curl -I http://SERVER_IP
```

Проверить в браузере:

- главная страница открывается;
- изображения отображаются;
- видео загружается;
- видео расположено справа внутри секции «Ценность актива» на desktop и под текстовой колонкой на mobile/tablet;
- текст «Сбалансированная структура коммерческих и гостиничных функций…» расположен под карточками в левой колонке «Ценности актива» и отсутствует в «Концепции»;
- видео запускается без звука и останавливается вне viewport;
- перезагрузка произвольного SPA-маршрута не даёт 404;
- DevTools Console без критических ошибок.

## После подключения домена

Домен и HTTPS подключены. При будущих изменениях домена нужно обновить DNS, `server_name` в host-level Nginx и перевыпустить сертификат Certbot.
