# Next.js Basics Demo

## 🎯 Цел на проекта

Целта на този проект е да демонстрира:
- базовата структура на Next.js приложение
- file-based routing чрез Pages Router
- навигация между страници
- базова full-stack комуникация чрез API routes

---

## 🧱 Какво демонстрира приложението

- Pages Router (file-based routing)
- Навигация с `Link`
- API Routes (`pages/api`)
- Изпращане на данни от frontend към backend чрез `fetch`

---

## 🛠 Използвани технологии

- Next.js
- React
- TypeScript
- Node.js

Не се използват допълнителни UI библиотеки, authentication или state management решения.

За цялостен пример на full-stack приложение с Next.js (включващ повече функционалности и архитектурни решения), вижте следния проект:

https://github.com/georgi-dimov-781/movie-catalog-next-js-uni-course

---

## 📁 Структура

```
pages/
index.tsx        → Начална страница (/)
about.tsx        → About страница (/about)
contact.tsx      → Contact страница (/contact)
api/
contact.ts     → API маршрут (/api/contact)

public/
favicon.ico

styles/
globals.css
```

- `pages/` – съдържа всички страници и routing логиката
- всеки файл в `pages/` автоматично става маршрут
- `pages/api/` – backend логика (API endpoints)
- `public/` – статични файлове
- `styles/` – глобални стилове

---

## 🚀 Стартиране на проекта локално

### 1️⃣ Изисквания

Уверете се, че имате инсталирано:

- **Node.js (версия 18 или по-нова)**

npm и npx се инсталират автоматично с Node.js.

Проверка:
```bash
node -v
npm -v
npx -v
````

---

### 2️⃣ Инсталиране на зависимостите

```bash
npm install
```

---

### 3️⃣ Стартиране на development сървъра

```bash
npm run dev
```

Приложението ще бъде достъпно на:

```
http://localhost:3000
```

---

## 🔁 Как работи Contact формата

1. Потребителят попълва формата на `/contact`
2. Данните се изпращат с `fetch` към `/api/contact`
3. API маршрутът обработва заявката
4. Връща се JSON отговор
5. Данните се логват в конзолата на сървъра

Това демонстрира базова frontend ↔ backend комуникация в Next.js.

---

## 🧪 Възможни разширения

### 🟢

* Добавяне на нова страница (напр. `/services`)
* Добавяне на нови полета във формата
* Промяна на съдържанието и структурата на страниците

### 🟡

* Добавяне на GET API маршрут
* Визуализация на списък с фиктивни данни
* Добавяне на базова клиентска валидация

### 🔴

* Използване на JSON файл като mock база данни
* Добавяне на динамичен маршрут (`[id].tsx`)
* Създаване на общ layout компонент

---

## 📚 Полезни ресурси

* Next.js документация: [https://nextjs.org/docs](https://nextjs.org/docs)
* Learn Next.js: [https://nextjs.org/learn](https://nextjs.org/learn)
* React документация: [https://react.dev](https://react.dev)
