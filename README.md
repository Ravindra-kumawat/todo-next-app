
# 🌈 Colorful Todo List App (Next.js + TypeScript)

A responsive, user-friendly Todo List application built using **Next.js (App Router)** and **TypeScript**, featuring:
- 📝 Add, mark, delete tasks
- 🎯 Filter: All, Active, Completed
- 💾 Persistent with LocalStorage
- 🎨 Colorful UI with responsive layout
- 🌙 Light/Dark theme toggle
- 💬 Expand/collapse long todo text

---

## 🚀 Features

- **Add Task** — with form validation
- **Mark Complete** — via checkbox (with strikethrough styling)
- **Delete Task** — per item
- **Filter Tasks** — All | Active | Completed
- **Persist Todos** — using `localStorage`
- **Responsive Design** — mobile & desktop friendly
- **Animated UI** — smooth CSS transitions
- **Expandable Long Text** — see more/less toggle
- **Dark/Light Theme Toggle** — stored in localStorage

---

## 🛠️ Technologies Used

- **Next.js (App Router)**
- **TypeScript**
- **CSS Modules**
- **Context API** — for theme management
- **HTML5, CSS3, JavaScript**

---

## 📁 Folder Structure

```
app/
  components/
    ThemeToggle.tsx
    TodoItem.tsx
  context/
    ThemeContext.tsx
  page.tsx
  layout.tsx
  globals.css
```

---

## 🧪 How to Run

1. **Clone the repo**

```bash
git clone https://github.com/Ravindra-kumawat/todo-next-app.git
cd todo-next-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run the app**

```bash
npm run dev
# or
yarn dev
```

Visit: `http://localhost:3000`

---

## 🌙 Theme Support

Your selected theme (light or dark) is saved in `localStorage` and auto-applied on next visit.

---

## 📄 License

MIT

---

> Designed & developed with 💙 using Next.js + TypeScript
