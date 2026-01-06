## 1. Какво представлява React компонент

В React (и Next.js) интерфейсът се изгражда чрез **компоненти**.

Пример:
```ts
export default function Contact() {
  return <h1>Contact</h1>;
}
````

* Компонентът е **JavaScript функция**
* Тя връща JSX (код, който описва как изглежда UI)
* Всеки компонент описва **част от интерфейса**

В Next.js, когато компонентът се намира в `pages/`, той автоматично става **страница**.

---

## 2. Какво означава `export default`

```ts
export default function Contact() {
  ...
}
```

* `export default` указва **кой е основният елемент**, който файлът предоставя
* Next.js използва този export, за да зареди страницата
* Не е необходимо да знаете детайлите на ES Modules, за да работите с Next.js

Може да мислите за това като:

> „Това е основният компонент в този файл“

---

## 3. JSX – JavaScript + HTML синтаксис

В React се използва **JSX**:

```tsx
<h1>Contact</h1>
```

* JSX изглежда като HTML, но **не е HTML**
* Това е синтаксис, който позволява да пишем UI директно в JavaScript
* В JSX можем да използваме JavaScript изрази чрез `{ }`

Пример:

```tsx
<h1>{title}</h1>
```

---

## 4. Какво са React hooks и `useState`

В примера се използва `useState`:

```ts
const [name, setName] = useState("");
```

Това е **React hook**, който:

* създава променлива (`name`)
* предоставя функция за промяна (`setName`)
* React „помни“ тази стойност между рендериранията

Обяснение на синтаксиса:

```ts
const [стойност, функцияЗаПромяна] = useState(началнаСтойност);
```

Пример:

```ts
const [submitted, setSubmitted] = useState(false);
```

* `submitted` пази дали формата е изпратена
* `setSubmitted(true)` променя състоянието

---

## 5. Обработка на събития (events)

В React събитията се обработват чрез функции:

```tsx
<form onSubmit={handleSubmit}>
```

```ts
function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
}
```

* `onSubmit` е React събитие
* `e.preventDefault()` спира стандартното поведение на формата
* Логиката се управлява изцяло в JavaScript

---

## 6. Изпращане на данни с `fetch`

В примера се използва `fetch`:

```ts
await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, message }),
});
```

* `fetch` е стандартен Web API
* Изпраща HTTP заявка към backend
* Данните се изпращат като JSON
* `/api/contact` е API маршрут в Next.js

Това демонстрира **frontend ↔ backend комуникация**.

---

## 7. Условно показване на съдържание

В React можем да показваме различен UI според състоянието:

```tsx
{submitted ? (
  <p>Thank you! The form was submitted successfully.</p>
) : (
  <form>...</form>
)}
```

* Това е стандартен JavaScript ternary оператор
* Ако `submitted` е `true` → показва се съобщение
* Ако е `false` → показва се формата

---

## 8. Контролирани input полета

```tsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

* Стойността на input-а идва от React state
* `onChange` обновява state-а при въвеждане
* Това се нарича **controlled component**

---

## 9. Навигация с `Link` в Next.js

```tsx
<Link href="/">← Back to Home</Link>
```

* `Link` е компонент на Next.js
* Позволява навигация между страници
* Не презарежда цялата страница
* Работи подобно на SPA навигация
 