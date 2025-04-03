# CoreManager Frontend

CoreManager is a responsive web application built with **React + Vite**, designed to manage users with a modern UI and secure access for administrators.

---

## ✨ Features

- 🧭 Sidebar navigation with mobile support (hamburger menu)
- 🔐 Admin login with **JWT authentication**
- 🧍‍♂️ User management (CRUD): list, add, edit, and delete users
- 👩‍💼 Administrator management (CRUD): secure routes for admin users
- 🔍 Real-time search by name or email
- 👁️ Show/hide password toggle (accessible)
- 🧑‍🦽 Accessibility-friendly UI (aria-labels, contrast, focus indicators)
- 💅 Clean and modern UI
- 📱 Fully responsive (desktop & mobile)
- 🌈 Custom color palette and typography (Poppins font)
- ⚡ Built with Vite for fast development experience

---

## 🚀 Technologies Used

- React
- Vite
- React Router
- Axios
- SweetAlert2
- React Icons
- Custom CSS with CSS Variables

---

## 🧩 Project Structure

```
src/
├── api/                # Axios instance configuration
├── features/           # Feature-based modules (users, admin, auth)
├── layouts/            # Layout components (MainLayout)
├── shared/             # Shared components (Navbar, Sidebar)
├── styles/             # Modular CSS files
├── routes/             # App routing and route protection
└── main.jsx            # App entry point
```

---

## 🔐 Authentication

### Admin Login

Use the login form at `/login` to authenticate with:

- 👤 **Username:** `admin`
- 🔐 **Password:** `admin123`

Upon success, a **JWT token** is stored in `localStorage`.

Authenticated routes include:

- `/users` (User management)
- `/admin-users` (Admin user management)

> The token is sent automatically in the `Authorization` header for all requests using Axios interceptors.

---

## ⚙️ Backend Setup (API Port)

Make sure the .NET Core backend is running (default: `https://localhost:7168`).

Update this base URL in `src/api/axios.ts`:

```ts
const api = axios.create({
  baseURL: "https://localhost:7168/api"
});
```

---

## 🛠 Getting Started

### Prerequisites

- Node.js (v16 or later)

### Installation

```bash
git clone https://github.com/DanielaMoraDevJourney/CoreManager.Frontend.git
cd CoreManager.Frontend
npm install
npm run dev
```

The app will run at `http://localhost:5173` or similar.

---

## 🧪 Development Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the production build
```

---

## 👩‍💻 Author

**Daniela Mora**  
Web Engineering Project  
📚 7th semester – 2025

---

## 📌 Project Status

✅ Backend and frontend fully functional  
✅ Admin authentication and secure routing  
✅ Clean UI with accessibility features included

