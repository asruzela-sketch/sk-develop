# Этап 2: Docker-деплой sk-develop на российский сервер

Проект: `sk-develop`  
Репозиторий: `https://github.com/asruzela-sketch/sk-develop`  
Локальный путь: `/Users/ilphapavel/Projects/sk-develop/repo`  
Сервер: `178.212.12.239`  
Пользователь сервера: `root`  
Тип проекта: Vite React SPA  
База данных: нет  
Backend: нет  
Обязательное требование: production-сборка и запуск через Dockerfile.

---

## 1. Текущий статус

Первый этап выполнен:

- проект склонирован локально;
- `npm run build` прошёл успешно;
- папка `dist/` создаётся;
- `npm run preview` проверен;
- SPA-маршруты отдают `200 OK`;
- backend/API/env/Supabase/Firebase/fetch/axios не обнаружены;
- созданы:
  - `AGENTS.md`
  - `AI_CONTEXT.md`
  - `DEPLOYMENT.md`
  - `TODO.md`

Найдены внешние зависимости:

- `lovable-tagger`;
- OG/Twitter image в `index.html` с `lovable.dev`;
- упоминания Lovable в `README.md`;
- Google Fonts в `src/index.css`;
- Yandex Maps iframe/ссылки;
- Telegram-ссылки.

---

## 2. Важное требование

Деплой должен быть через Dockerfile.

Не делать деплой через простое копирование `dist/` в `/var/www`.

Правильная схема:

```text
GitHub repo
   ↓
Docker build
   ↓
Vite build внутри Docker
   ↓
Nginx внутри контейнера отдаёт dist
   ↓
Сайт доступен по IP / домену
```

---

## 3. Что нужно добавить в проект

В корень проекта нужно добавить:

```text
Dockerfile
.dockerignore
nginx.conf
```

Также обновить:

```text
DEPLOYMENT.md
AI_CONTEXT.md
TODO.md
AGENTS.md
```

---

## 4. Dockerfile

Создать файл `Dockerfile` в корне проекта:

```Dockerfile
# Stage 1: build frontend
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: serve static files with nginx
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

Если в проекте нет `package-lock.json`, заменить:

```Dockerfile
RUN npm ci
```

на:

```Dockerfile
RUN npm install
```

---

## 5. .dockerignore

Создать файл `.dockerignore`:

```dockerignore
node_modules
dist
.git
.gitignore
.DS_Store
README.md
*.log
.env
.env.*
.vscode
.idea
coverage
```

---

## 6. nginx.conf для SPA

Создать файл `nginx.conf`:

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

Важно: `try_files $uri $uri/ /index.html;` обязателен, потому что проект использует React Router / BrowserRouter.

---

## 7. Локальная проверка Docker

Выполнить в корне проекта:

```bash
docker build -t sk-develop .
docker run --rm -p 8080:80 sk-develop
```

Проверить в браузере:

```text
http://localhost:8080
```

Проверить произвольный SPA-маршрут:

```text
http://localhost:8080/test-route
```

Ожидаемо:

- главная открывается;
- произвольный маршрут не даёт серверный 404;
- отображается React-приложение;
- assets грузятся.

---

## 8. Подключение к серверу по SSH

Сервер:

```text
178.212.12.239
```

Пользователь:

```text
root
```

Проверить подключение:

```bash
ssh root@178.212.12.239
```

Если SSH просит пароль — войти по паролю, который выдал хостинг.

---

## 9. Создание SSH-ключа для деплоя

Рекомендуемый вариант: создать SSH-ключ на локальной машине, а публичный ключ добавить на сервер.

На локальной машине:

```bash
ssh-keygen -t ed25519 -C "sk-develop-deploy" -f ~/.ssh/sk_develop_deploy
```

Добавить ключ на сервер:

```bash
ssh-copy-id -i ~/.ssh/sk_develop_deploy.pub root@178.212.12.239
```

Проверить вход по ключу:

```bash
ssh -i ~/.ssh/sk_develop_deploy root@178.212.12.239
```

Если `ssh-copy-id` недоступен, добавить вручную:

```bash
cat ~/.ssh/sk_develop_deploy.pub
```

На сервере:

```bash
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

Вставить публичный ключ в `authorized_keys`.

---

## 10. Установка Docker на сервер

На сервере:

```bash
apt update
apt install -y ca-certificates curl gnupg git ufw

install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

. /etc/os-release
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu   $VERSION_CODENAME stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

docker --version
docker compose version
```

---

## 11. Настройка firewall

На сервере:

```bash
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status
```

Важно: сначала разрешить OpenSSH, потом включать UFW, иначе можно закрыть себе доступ.

---

## 12. Деплой на сервер

На сервере:

```bash
mkdir -p /opt/sk-develop
cd /opt/sk-develop
git clone https://github.com/asruzela-sketch/sk-develop.git .
```

Собрать Docker-образ:

```bash
docker build -t sk-develop:latest .
```

Запустить контейнер:

```bash
docker run -d   --name sk-develop   --restart unless-stopped   -p 80:80   sk-develop:latest
```

Проверить:

```bash
docker ps
curl -I http://localhost
curl -I http://178.212.12.239
```

В браузере:

```text
http://178.212.12.239
```

---

## 13. Обновление после изменений

На сервере:

```bash
cd /opt/sk-develop
git pull

docker build -t sk-develop:latest .

docker stop sk-develop || true
docker rm sk-develop || true

docker run -d   --name sk-develop   --restart unless-stopped   -p 80:80   sk-develop:latest
```

---

## 14. Альтернатива: docker compose

Можно добавить `docker-compose.yml`:

```yaml
services:
  sk-develop:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: sk-develop
    restart: unless-stopped
    ports:
      - "80:80"
```

Запуск:

```bash
docker compose up -d --build
```

Остановка:

```bash
docker compose down
```

Логи:

```bash
docker compose logs -f
```

Для простого проекта лучше использовать `docker compose`, чтобы обновления были чище.

---

## 15. Что делать с VNC-ссылкой

VNC-ссылка от хостинга нужна для аварийного доступа к серверу через браузер, если SSH не работает.

Обычно используется для:

- первого входа;
- восстановления доступа;
- диагностики, если сломался firewall;
- ручной работы с консолью сервера.

В обычном деплое VNC не нужен. Основной рабочий способ — SSH.

Важно: VNC-ссылку и token не публиковать в открытых местах.

---

## 16. Что делать с доменом позже

Когда появится доступ к домену:

1. В DNS добавить A-записи:

```text
@    A    178.212.12.239
www  A    178.212.12.239
```

2. После обновления DNS добавить HTTPS.

Если сайт работает только в Docker-контейнере на 80 порту, для HTTPS есть два варианта:

### Вариант А. Certbot на сервере + Nginx вне Docker

Более классический вариант, но требует отдельного host Nginx.

### Вариант Б. Docker Compose с reverse proxy

Например:

- Caddy;
- Traefik;
- Nginx Proxy Manager.

Для этого маленького проекта проще на первом этапе запустить сайт по HTTP/IP, а HTTPS добавить после привязки домена отдельным шагом.

---

## 17. Что нужно обновить в документации проекта

### AGENTS.md

Добавить:

```md
## Deployment requirement

Production deployment must use Dockerfile.

Do not deploy by manually copying `dist/` to `/var/www`.

Expected production flow:

- build Docker image;
- Vite build runs inside Docker;
- Nginx inside Docker serves `/usr/share/nginx/html`;
- SPA fallback must be configured in `nginx.conf`.
```

### AI_CONTEXT.md

Добавить:

```md
## Deployment update

Deployment must be Docker-based.

Required files:

- `Dockerfile`
- `.dockerignore`
- `nginx.conf`
- optional `docker-compose.yml`

The app is still frontend-only. Docker is used only for reproducible build and serving static files with Nginx.
```

### DEPLOYMENT.md

Заменить инструкцию деплоя через `/var/www/dist` на Docker-инструкцию из этого файла.

### TODO.md

Добавить задачи:

```md
- [ ] Add Dockerfile.
- [ ] Add .dockerignore.
- [ ] Add nginx.conf.
- [ ] Optionally add docker-compose.yml.
- [ ] Test Docker build locally.
- [ ] Test Docker run locally.
- [ ] Configure SSH key access to server.
- [ ] Install Docker on server.
- [ ] Deploy container to server.
- [ ] Check site by IP.
```

---

## 18. Definition of Done для второго этапа

Этап считается готовым, если:

- добавлен `Dockerfile`;
- добавлен `.dockerignore`;
- добавлен `nginx.conf`;
- при необходимости добавлен `docker-compose.yml`;
- локально проходит `docker build`;
- локально сайт открывается через Docker;
- SPA fallback работает;
- документация обновлена;
- сервер доступен по SSH;
- SSH-ключ добавлен;
- Docker установлен на сервер;
- контейнер запущен;
- сайт открывается по IP `http://178.212.12.239`.

---

## 19. Первый шаг для нейронки

Сначала не трогать сервер.

Первое действие:

1. В локальном проекте добавить Docker-инфраструктуру.
2. Проверить Docker-сборку локально.
3. Обновить документацию.
4. Дать отчёт.

Только после успешной локальной Docker-проверки переходить к серверу.
