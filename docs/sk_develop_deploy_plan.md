# План переноса Lovable/Vite React проекта на российский сервер

Проект: `asruzela-sketch/sk-develop`  
Репозиторий: `https://github.com/asruzela-sketch/sk-develop`  
Тип проекта: статический frontend / SPA  
Стек: Vite + React 18 + TypeScript + Tailwind CSS + shadcn-ui/Radix UI  
База данных: не обнаружена  
Backend: не обнаружен  
Основная цель: развернуть сайт на российском VPS так, чтобы он открывался без VPN.

---

## 1. Короткий вывод по проекту

Это не fullstack-приложение, а frontend-сайт, собранный через Vite.

Что важно:

- база данных не нужна;
- миграции не нужны;
- backend-сервер не нужен;
- Supabase/Firebase/Prisma/PostgreSQL/MySQL/MongoDB не обнаружены;
- деплой можно делать как обычную статику через Nginx;
- после сборки нужно отдавать папку `dist/`;
- так как используется React Router / BrowserRouter, в Nginx обязателен fallback на `index.html`.

---

## 2. Общий план переноса

### Этап 1. Локальная проверка проекта

Цель: убедиться, что проект собирается и работает локально.

Команды:

```bash
git clone https://github.com/asruzela-sketch/sk-develop.git
cd sk-develop
npm install
npm run build
npm run preview
```

Проверить:

- сайт открывается локально;
- нет ошибок сборки;
- картинки и видео отображаются;
- нет обращений к Lovable, которые критичны для работы сайта.

---

### Этап 2. Подготовка контекстных файлов для работы с нейронкой

Создать в корне проекта файлы:

```text
AGENTS.md
AI_CONTEXT.md
DEPLOYMENT.md
TODO.md
```

Назначение:

- `AGENTS.md` — правила для нейронки, чтобы она не ломала проект;
- `AI_CONTEXT.md` — краткий контекст проекта;
- `DEPLOYMENT.md` — инструкция по деплою;
- `TODO.md` — текущие задачи и статус.

---

### Этап 3. Проверка внешних зависимостей

Нужно проверить проект на внешние ссылки и зависимости от Lovable.

Поиск:

```bash
grep -R "lovable\|supabase\|firebase\|api\.\|fetch\|axios\|import.meta.env\|process.env" -n .   --exclude-dir=node_modules   --exclude-dir=dist   --exclude-dir=.git
```

Особое внимание:

- `index.html` содержит OpenGraph-картинки с `lovable.dev`;
- это не блокирует работу сайта, но лучше заменить на локальные файлы;
- если будут найдены другие внешние URL — отдельно оценить, критичны ли они.

---

### Этап 4. Подготовка production-сборки

Команды:

```bash
npm install
npm run build
```

Результат:

```text
dist/
```

Эту папку нужно будет отдавать через Nginx.

---

### Этап 5. Подготовка российского сервера

Ожидаемый сервер:

- Ubuntu 22.04/24.04;
- доступ по SSH;
- root или пользователь с sudo;
- домен пока может быть не привязан.

На сервере установить:

```bash
sudo apt update
sudo apt install -y nginx git curl
```

Node.js нужен только если сборка будет выполняться прямо на сервере. Если собирать локально и загружать `dist/`, Node.js на сервере не обязателен.

Рекомендуемый вариант: собирать на сервере, если проект небольшой.

Установка Node.js через NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

---

### Этап 6. Деплой на сервер

Вариант А — сборка на сервере:

```bash
cd /var/www
sudo git clone https://github.com/asruzela-sketch/sk-develop.git
sudo chown -R $USER:$USER /var/www/sk-develop
cd /var/www/sk-develop
npm install
npm run build
```

Вариант Б — сборка локально и загрузка `dist/`:

```bash
npm install
npm run build
scp -r dist/* root@SERVER_IP:/var/www/sk-develop/dist/
```

---

### Этап 7. Nginx-конфиг

Создать файл:

```bash
sudo nano /etc/nginx/sites-available/sk-develop
```

Временный конфиг по IP, пока домен не привязан:

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/sk-develop/dist;
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

Активировать:

```bash
sudo ln -s /etc/nginx/sites-available/sk-develop /etc/nginx/sites-enabled/sk-develop
sudo nginx -t
sudo systemctl reload nginx
```

Если есть дефолтный сайт, можно отключить:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

### Этап 8. Проверка по IP

Пока домен не привязан, проверить:

```bash
curl -I http://SERVER_IP
```

В браузере:

```text
http://SERVER_IP
```

Проверить:

- главная страница открывается;
- изображения отображаются;
- видео загружается;
- перезагрузка страницы не дает 404;
- DevTools Console без критических ошибок.

---

### Этап 9. Подключение домена

Когда появится доступ к домену:

1. В DNS добавить A-запись:

```text
@  A  SERVER_IP
www A SERVER_IP
```

2. В Nginx заменить:

```nginx
server_name _;
```

на:

```nginx
server_name domain.ru www.domain.ru;
```

3. Перезагрузить Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

### Этап 10. SSL-сертификат

После привязки домена:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d domain.ru -d www.domain.ru
```

Проверить автообновление:

```bash
sudo certbot renew --dry-run
```

---

## 3. Что нужно сделать до получения сервера

Пока сервера и домена нет, можно сделать:

1. Склонировать проект локально.
2. Установить зависимости.
3. Проверить `npm run build`.
4. Запустить `npm run preview`.
5. Найти внешние зависимости.
6. Создать `AGENTS.md`.
7. Создать `AI_CONTEXT.md`.
8. Создать `DEPLOYMENT.md`.
9. Создать `TODO.md`.
10. Заменить OpenGraph-картинки Lovable на локальную картинку, если есть подходящий файл.
11. Проверить размер видео/assets.
12. Подготовить Nginx-конфиг для будущего сервера.

---

## 4. Рекомендуемый AGENTS.md

```md
# AGENTS.md

## Project type

This is a static frontend SPA built with Vite, React, TypeScript, Tailwind CSS and shadcn-ui/Radix UI.

## Important constraints

- Do not add backend unless explicitly requested.
- Do not add database unless explicitly requested.
- Do not add Supabase/Firebase/Prisma/ORM.
- Do not rewrite the project to Next.js.
- Do not change the visual design unless the task explicitly says so.
- Do not remove existing assets.
- Do not rename public routes without checking React Router and Nginx fallback.
- Keep deployment simple: Vite build + Nginx static hosting.

## Commands

Install dependencies:

```bash
npm install
```

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

Tests:

```bash
npm run test
```

Lint:

```bash
npm run lint
```

## Definition of Done

Before saying the task is complete:

- `npm run build` passes.
- No critical console errors in browser.
- Site works after page reload.
- Static assets load correctly.
- No unnecessary backend/database dependencies were added.
```

---

## 5. Рекомендуемый AI_CONTEXT.md

```md
# AI_CONTEXT.md

## Project summary

This project was created in Lovable and exported to GitHub.

Repository:

```text
https://github.com/asruzela-sketch/sk-develop
```

The project is a static frontend website / SPA.

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui / Radix UI
- React Router
- TanStack React Query

## Backend and database

No backend or database is currently used.

There is no evidence of:

- Supabase
- Firebase
- Prisma
- Drizzle
- PostgreSQL
- MySQL
- MongoDB
- Express/FastAPI backend

## Deployment goal

Deploy to a Russian VPS so the website opens without VPN.

Preferred deployment:

- build with `npm run build`;
- serve `dist/` via Nginx;
- configure SPA fallback:

```nginx
try_files $uri $uri/ /index.html;
```

## Current focus

Prepare the project for deployment:

1. Clone locally.
2. Install dependencies.
3. Check production build.
4. Check external Lovable links.
5. Add context/deployment files.
6. Prepare Nginx config.
7. Later deploy to VPS.
```

---

## 6. Рекомендуемый DEPLOYMENT.md

```md
# DEPLOYMENT.md

## Local build

```bash
git clone https://github.com/asruzela-sketch/sk-develop.git
cd sk-develop
npm install
npm run build
npm run preview
```

## Server build

```bash
cd /var/www
sudo git clone https://github.com/asruzela-sketch/sk-develop.git
sudo chown -R $USER:$USER /var/www/sk-develop
cd /var/www/sk-develop
npm install
npm run build
```

## Nginx config before domain is connected

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/sk-develop/dist;
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

## Enable Nginx site

```bash
sudo ln -s /etc/nginx/sites-available/sk-develop /etc/nginx/sites-enabled/sk-develop
sudo nginx -t
sudo systemctl reload nginx
```

## SSL after domain is connected

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d domain.ru -d www.domain.ru
sudo certbot renew --dry-run
```
```

---

## 7. Рекомендуемый TODO.md

```md
# TODO.md

## Current status

Project analysis completed.

Result:

- frontend-only project;
- no database;
- no backend;
- deployment target: Russian VPS + Nginx static hosting.

## Before server access

- [ ] Clone repository locally.
- [ ] Run `npm install`.
- [ ] Run `npm run build`.
- [ ] Run `npm run preview`.
- [ ] Check browser console.
- [ ] Search for external Lovable links.
- [ ] Add `AGENTS.md`.
- [ ] Add `AI_CONTEXT.md`.
- [ ] Add `DEPLOYMENT.md`.
- [ ] Prepare Nginx config.

## After server access

- [ ] SSH into server.
- [ ] Install Nginx, Git, Node.js.
- [ ] Clone project to `/var/www/sk-develop`.
- [ ] Run `npm install`.
- [ ] Run `npm run build`.
- [ ] Configure Nginx.
- [ ] Check site by server IP.
- [ ] Connect domain when DNS access is available.
- [ ] Issue SSL certificate.
```

---

## 8. Первый шаг для нейронки

Первый безопасный шаг без сервера:

1. Склонировать проект локально.
2. Проверить сборку.
3. Создать контекстные файлы.
4. Не менять дизайн и бизнес-логику.
5. Не добавлять backend/БД.

Команды:

```bash
git clone https://github.com/asruzela-sketch/sk-develop.git
cd sk-develop
npm install
npm run build
npm run preview
```

---

## 9. Definition of Done для подготовительного этапа

Подготовительный этап считается готовым, если:

- проект склонирован локально;
- зависимости установлены;
- `npm run build` проходит;
- `npm run preview` запускает сайт;
- добавлены `AGENTS.md`, `AI_CONTEXT.md`, `DEPLOYMENT.md`, `TODO.md`;
- найден и зафиксирован список внешних ссылок;
- подготовлен Nginx-конфиг для сервера;
- подтверждено, что БД/backend переносить не нужно.
