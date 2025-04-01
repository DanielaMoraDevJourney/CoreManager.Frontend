# CoreManager

CoreManager is a responsive web application built with **React + Vite**, designed to manage users with a modern UI. It features a collapsible sidebar, search functionality, and adaptive layouts for both desktop and mobile devices.

## ✨ Features

- 🧭 Sidebar navigation with mobile support (hamburger menu)
- 🧍‍♂️ User management: list, add, edit, and delete users
- 🔍 Real-time search by name or email
- 💅 Clean and modern UI 
- 📱 Fully responsive (desktop & mobile)
- 🌈 Custom color palette and typography (Poppins font)
- ⚡ Built with Vite for fast development experience

## 🚀 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [SweetAlert2](https://sweetalert2.github.io/) for confirmation dialogs
- [React Icons](https://react-icons.github.io/react-icons/) for consistent iconography
- Custom CSS with `:root` variables for theming

---

## Getting Started

### Prerequisites

Make sure you have Node.js (version 16 or later) installed.

```bash
node -v
npm -v
```

### Installation

Clone the repo:

```bash
git clone https://github.com/DanielaMoraDevJourney/CoreManager.Frontend.git
cd coremanager
```

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

The app will be available at `http://localhost:####` (Your port number may vary)

---

## 🔧 Backend Configuration (API Port)

Before running the frontend, make sure your backend (.NET Core) is running.
**Important:** The backend port number may change when running locally (e.g., `https://localhost:7168` or similar).

You must update this port in the `axios.ts` file located at:

```
src/api/axios.ts
```

Find and edit the `baseURL` line with the correct port for your backend:

```ts
const api = axios.create({
baseURL: "https://localhost:7168/api", // ← Make sure it matches your backend port
});
```

Save your changes and run the frontend again if necessary.
---

## Project Structure

```
src/
│
├── components/        # Reusable components (UserCard, etc.)
├── pages/             # Route-level views (UserList, CreateUser, etc.)
├── services/          # API logic (getUsers, deleteUser, etc.)
├── shared/            # Shared layout elements (Navbar, Sidebar)
├── styles/            # CSS styles (MainLayout.css, Components.css)
└── main.jsx           # App entry point
```

---

## 🧠 Learning Resources

This project uses:

- `@vitejs/plugin-react` – [Docs](https://github.com/vitejs/vite-plugin-react)
- `eslint` – for linting and code consistency
- `react-router-dom` – for routing
- `SweetAlert2` – for nice alert dialogs

---

## 📦 Build for Production

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

---

## Author

Daniela Mora – Web Engineering Project  
📚 7th semester – 2025

---

