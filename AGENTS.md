# AGENTS.md

## Цель проекта

Подготовить и поддерживать статический frontend-проект `sk-develop` для простого деплоя Vite React SPA через Nginx на российском сервере.

## Жёсткие ограничения

- Не добавлять backend.
- Не добавлять базу данных.
- Не подключать Supabase, Firebase, Prisma, PostgreSQL, MySQL, MongoDB или похожую инфраструктуру.
- Не переписывать проект на Next.js или другой фреймворк.
- Не менять дизайн без отдельной задачи.
- Не ломать текущую структуру Vite React SPA.
- Не добавлять серверный рендеринг.

## Текущий стек

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui / Radix UI
- React Router

## Безопасные команды проверки

```bash
npm install
npm run build
npm run preview
docker build -t sk-develop .
docker run --rm -p 8080:80 sk-develop
```

## Правила изменений

- Для деплоя использовать папку `dist/`.
- Для Docker production-сборки использовать multi-stage `Dockerfile`: build через Node.js, отдача статики через Nginx.
- Для React Router / BrowserRouter в Nginx нужен fallback на `/index.html`.
- Перед деплоем проверять сборку командой `npm run build`.
- Перед Docker-деплоем проверять `docker build` и локальный `docker run`.
- Внешние ссылки проверять отдельно, особенно Lovable, Google Fonts, Yandex Maps и Telegram.
- Любые изменения зависимостей делать осознанно и отдельно от документационных правок.
