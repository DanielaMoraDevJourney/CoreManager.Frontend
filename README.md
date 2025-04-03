# CoreManager.Frontend

CoreManager is a modern, responsive web application built with **React + Vite** for managing users and administrators. It features a clean UI, intuitive navigation, and secure authentication with JWT.

---

## 🚀 Motivation

This frontend was developed as part of a full-stack engineering project to:

- Provide a friendly and accessible interface for managing users
- Implement authentication with JWT
- Practice modern frontend development techniques
- Build an extensible and scalable layout for future features

---

## ✨ Features

- 🔐 Login screen with JWT authentication
- 🧍‍♂️ Admin and user CRUD modules
- 📱 Fully responsive UI
- 🎨 Custom design system (colors, Poppins font, light gradients)
- 🍔 Mobile-friendly sidebar (hamburger menu)
- 🔍 Real-time search by name/email
- 🎉 SweetAlert2 for friendly interactions
- 👁️ Show/Hide password toggle with accessibility support

---

## 🧱 Tech Stack

- React 18
- Vite
- React Router DOM
- SweetAlert2
- Axios
- React Icons
- Custom CSS

---

## 📂 Project Structure

```
src/
├── api/               # Axios configuration
├── features/          # Features split by domain (users, admin)
│   ├── admin/         # AdminUser pages (List, Create, Edit)
│   └── users/         # Login page and user screens
├── resources/         # Assets like logos
├── routes/            # Routing (with private routes)
├── shared/            # Navbar, Sidebar
├── styles/            # Component-specific CSS
└── main.jsx           # Entry point
```

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/DanielaMoraDevJourney/CoreManager.Frontend.git
cd coremanager-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure backend port

Edit `src/api/axios.ts`:

```ts
const api = axios.create({
  baseURL: "https://localhost:7168/api", // ← Match your backend port
});
```

> ⚠️ Ensure your .NET backend is running before using the frontend.

### 4. Run the app locally

```bash
npm run dev
```

The app will be available at:

📍 `http://localhost:5173`

---

## 🔐 How to Use

### Admin Login
Use the following credentials to log in:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Once authenticated, a token will be stored in `localStorage` and used to authorize requests.

---

## 🧪 Future Improvements

- Role-based dashboard per user type
- Dark mode toggle
- Unit tests with React Testing Library
- Internationalization support (i18n)
- Focus states and autoFocus on login fields
- aria-labels for interactive elements
- Subtle animations to enhance experience

---

## 👥 Author & Credits

Developed by **Daniela Mora**  
🎓 Web Engineering Project - 7th Semester (2025)  
📫 [GitHub Profile](https://github.com/DanielaMoraDevJourney)

---

## 🙌 Contributing

This project is currently maintained as part of a university course.  
Pull requests are welcome, but feel free to fork and build on top of it.
> Thanks for visiting this repo! Feel free to star ⭐ the project if you found it helpful!


## 📌 Project Status

✅ Fully functional frontend
✅ Responsive design with modern UI
✅ Integrated login with JWT
✅ Admin and user CRUD features completed


