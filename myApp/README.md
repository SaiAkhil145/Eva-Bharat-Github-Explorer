# 🚀 GitHub Explorer

A modern, fast, and user-friendly React application to search GitHub profiles and explore repositories seamlessly.

![GitHub Explorer](https://github.com/user-attachments/assets/a7c58c85-83fd-461a-83b2-2e78758b6a7f)

---

## ✨ Features

- 🔍 **User Search**  
  Search GitHub users with debounced input (300–500ms)

- 📦 **Repository Exploration**  
  View repositories with:
  - Name
  - Description
  - ⭐ Stars
  - 🍴 Forks
  - 🧑‍💻 Language

- 🎯 **Filtering & Sorting**
  - Sort by stars/forks  
  - Filter by programming language (case-insensitive)

- 📄 **Pagination**
  - Server-side pagination for efficient results

- 🔖 **Bookmarking**
  - Save/remove repos
  - Persistent storage using `localStorage`

- 🎨 **Modern UI**
  - Card-based layout
  - Skeleton loaders
  - Loading states
  - Error & empty states

- 📱 **Responsive Design**
  - Works across devices
  - Dark mode support

- 🎯 **Icons**
  - Powered by Lucide React

---

## 🛠️ Tech Stack

- ⚛️ React (Hooks + Functional Components)
- 🌐 React Router
- 🧠 JavaScript (ES6+)
- 🎨 Custom CSS (CSS Variables)
- 🎯 Lucide React
- 🔌 GitHub REST API
- 💾 localStorage

---

## 🚀 Live Demo

👉 **[View Live App](https://eva-bharat-github-explorer-liqc.vercel.app/)**

---

## 📸 Screenshots

| Home / Search Page | User Repositories | Bookmarks |
|-------------------|------------------|-----------|
| ![Home](https://github.com/user-attachments/assets/a7c58c85-83fd-461a-83b2-2e78758b6a7f) | ![Repos](https://github.com/user-attachments/assets/d15b188e-b0ad-401e-8d77-0efd2fdd40fc) | ![Users](https://github.com/user-attachments/assets/de6b558c-899e-4600-a83c-5de9fa1b8685) |

---

## 📁 Project Structure

```bash
src/
├── api/
│   └── githubApi.js
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   ├── RepoCard.jsx
│   ├── SpinnerLoader.jsx
│   ├── Empty.jsx
│   ├── Error.jsx
│   └── Pagination.jsx
├── hooks/
│   ├── useDebounce.js
│   ├── useFetchUsers.js
│   └── useFetchRepos.js
├── pages/
│   ├── Home.jsx
│   └── UserRepos.jsx
├── styles/
│   ├── global.css
│   ├── components.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/SaiAkhil145/Eva-Bharat-Github-Explorer.git

# 2. Navigate into the folder
cd Eva-Bharat-Github-Explorer

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
```

---

## 🔌 API Endpoints Used

- **Search Users**  
  `https://api.github.com/search/users?q={query}`

- **Get User Repositories**  
  `https://api.github.com/users/{username}/repos`

---

## 🔥 Key Implementation Highlights

- Custom reusable hooks (`useDebounce`, `useFetchUsers`, `useFetchRepos`)
- Optimized API calls with debouncing
- Clean separation of concerns (UI vs logic)
- Robust handling of:
  - Loading states
  - Errors
  - Empty results
- Persistent bookmarking via `localStorage`
- Server-side pagination for scalability

---

## 🚀 Future Improvements

- 🔄 Infinite scrolling
- ⚡ API caching
- 🎯 Multi-select filters & tags
- ✨ Animations & transitions
- 🌗 System-based dark/light mode

---

## 👨‍💻 Author

**Sai Akhil**  
GitHub: https://github.com/SaiAkhil145

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

Made with ❤️ for the developer community
