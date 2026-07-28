# AI_CONTEXT.md

## Краткий контекст

`sk-develop` — статический frontend-сайт для девелоперского актива рядом со Сколково. Проект собран как Vite React SPA и может деплоиться как обычная статика через Nginx.

Репозиторий:

```text
https://github.com/asruzela-sketch/sk-develop
```

## Что уже проверено

- Репозиторий успешно клонирован локально.
- Зависимости установлены через `npm install`.
- Production-сборка `npm run build` проходит успешно.
- Preview `npm run preview -- --host 127.0.0.1 --port 4173` отдаёт сайт с HTTP `200 OK`.
- SPA fallback в Vite preview работает: произвольный маршрут отдаёт `index.html`.
- Добавлены Dockerfile, `.dockerignore` и `nginx.conf` для production-запуска через Nginx в контейнере.
- Docker-сборка `docker build -t sk-develop .` проходит успешно.
- Локальный контейнер `docker run -d --rm --name sk-develop-local -p 8080:80 sk-develop` отдаёт главную страницу на `http://localhost:8080/`.
- Прямой заход на `http://localhost:8080/test-route` отдаёт React-приложение через Nginx fallback; серверного 404 нет.
- Основные статические файлы из контейнера проверены: JS, CSS, PNG и MOV возвращают HTTP `200 OK`.
- Сервер для деплоя уточнён: `178.212.12.239`, Ubuntu 24.04.3 LTS, пользователь `root`.
- SSH-доступ по ключу настроен через локальный alias `sk-develop` и ключ `~/.ssh/sk_develop_deploy`.
- На сервер установлены `git`, `curl`, Docker Engine, Buildx и Docker Compose plugin.
- Docker daemon активен и включён в автозапуск; `docker run --rm hello-world` проходит успешно.
- Видео проекта встроено в секцию `ValueSection`: на desktop оно расположено справа от текста, на mobile/tablet — под текстом; отдельная видеосекция удалена, и «Концепция» следует сразу за «Ценностью актива».
- Текст «Сбалансированная структура коммерческих и гостиничных функций с учётом локации и градостроительных параметров» перенесён из `ConceptSection` под карточки в левую колонку `ValueSection` с сохранением стилей основного описания.
- Логика воспроизведения из бывшей отдельной секции сохранена в небольшом компоненте `ProjectVideoPlayer`.
- Для нового блока подготовлены локальные беззвучные версии видео WebM/VP9 и MP4/H.264 720×1280, а также WebP-постер; мастер-файл хранится вне репозитория.
- Видео подгружается только при приближении блока к viewport, автоматически воспроизводится без звука в зоне просмотра, останавливается вне её и учитывает `prefers-reduced-motion`.
- Адаптивность секции со встроенным видео проверена на ширинах 320, 375, 390, 768, 1024, 1280 и 1440 px; горизонтального переполнения нет.
- Container-level Nginx cache policy дополнена поддержкой расширения `.webm`.
- Коммит `ca5bc01` развёрнут в production 28 июля 2026 года как Docker-образ `sk-develop:ca5bc01`; предыдущий контейнер `8d806e7` сохранён остановленным для отката.

## Архитектура

- Точка входа: `src/main.tsx`.
- Основной роутинг: `src/App.tsx`.
- Страницы: `src/pages/`.
- Компоненты: `src/components/`.
- Статические и импортируемые медиа: `public/`, `src/assets/`.
- Оптимизированные медиа нового видеоблока: `public/video/`.
- Production-результат: `dist/`.
- Docker production-схема: multi-stage build в `node:20-alpine`, затем отдача `/app/dist` через `nginx:1.27-alpine`.
- Nginx-конфиг контейнера: `nginx.conf`, root `/usr/share/nginx/html`, SPA fallback `try_files $uri $uri/ /index.html`.

## Внешние зависимости и ссылки

Найдены:

- `lovable-tagger` в `vite.config.ts` и `package.json`; используется только в development mode.
- OpenGraph/Twitter image с `https://lovable.dev/...` в `index.html`.
- Упоминания Lovable в `README.md`.
- Google Fonts import в `src/index.css`.
- Yandex Maps ссылки и iframe в `src/components/DeveloperSection.tsx` и `src/components/LandInfoSection.tsx`.
- Telegram-ссылки в `src/components/Header.tsx` и `src/components/ContactsSection.tsx`.
- `$schema` shadcn в `components.json`.

Не обнаружены:

- backend API как обязательная часть приложения;
- `fetch`;
- `axios`;
- `import.meta.env`;
- `process.env`;
- Supabase;
- Firebase.

## Замечания проверки

- `npm install` сообщает об уязвимостях в дереве зависимостей. Автофикс не запускался, чтобы не менять версии в рамках безопасного первого этапа.
- `npm run build` показывает предупреждение Vite CSS: `@import` Google Fonts стоит после Tailwind-директив. Сборку это не ломает.
- Browserslist сообщает, что данные `caniuse-lite` устарели. Сборку это не ломает.
- `package-lock.json` был синхронизирован через `npm install`, потому что `npm ci` внутри Docker сначала падал из-за расхождения lockfile с `package.json`.
- `npm install` по-прежнему сообщает об уязвимостях в дереве зависимостей; `npm audit fix` не запускался.
