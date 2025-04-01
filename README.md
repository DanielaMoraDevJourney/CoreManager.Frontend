# CoreManager

CoreManager is a responsive web application built with **React + Vite**, designed to manage users with a modern UI. It features a collapsible sidebar, search functionality, and adaptive layouts for both desktop and mobile devices.

## ✨ Features

- 🧭 Sidebar navigation with mobile support (hamburger menu)
- 🧍‍♂️ User management: list, add, edit, and delete users
- 🔍 Real-time search by name or email
- 💅 Clean and modern UI inspired by Cabify
- 📱 Fully responsive (desktop & mobile)
- 🌈 Custom color palette and typography (Poppins font)
- ⚡ Built with Vite for fast development experience

## 🖼️ Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![Desktop Screenshot](./screenshots/desktop.png) | ![Mobile Screenshot](./screenshots/mobile.png) |

> Note: Replace with real images or remove this section if not available.

---

## 🚀 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [SweetAlert2](https://sweetalert2.github.io/) for confirmation dialogs
- [React Icons](https://react-icons.github.io/react-icons/) for consistent iconography
- Custom CSS with `:root` variables for theming

---

## 🧑‍💻 Getting Started

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

The app will be available at `http://localhost:####`

---

## 📁 Project Structure

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

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Inspired by Cabify's modern UI
- Designed with care to balance simplicity and functionality
