# GitHub Explorer

A modern, fast, and user-friendly React application to search GitHub profiles and explore repositories seamlessly.

![GitHub Explorer](<img width="1911" height="908" alt="image" src="https://github.com/user-attachments/assets/a7c58c85-83fd-461a-83b2-2e78758b6a7f" />)  
<!-- Replace the above link with your actual banner/screenshot later -->

## ✨ Features

- **User Search**: Search GitHub users with debounced input (300–500ms) using GitHub REST API
- **Repository Exploration**: View detailed repositories with name, description, stars, forks, and language
- **Filtering & Sorting**: Sort by stars/forks and filter by programming language (case-insensitive)
- **Pagination**: Server-side pagination for efficient user search results
- **Bookmarking**: Save and remove repositories with persistent storage using `localStorage`
- **Modern UI**: Clean card-based layout, loading spinners, skeleton loaders, error handling, and empty states
- **Responsive Design**: Fully responsive across devices with dark mode support
- **Icons**: Powered by **Lucide React**

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **React Router**
- **JavaScript (ES6+)**
- **Custom CSS** (with CSS Variables)
- **Lucide React** (Icons)
- **GitHub REST API**
- **localStorage** (for bookmarks)

---

## 🚀 Live Demo

<!-- Add your deployed app link here -->
**Live Demo**: [GitHub Explorer](https://eva-bharat-github-explorer-liqc.vercel.app/)  
*(Replace with actual deployed link)*

---

## 📸 Screenshots

<!-- Replace placeholder links with your actual screenshots -->

| Home / Search Page          | User Repositories Page       | Bookmarks Section          |
|-----------------------------|------------------------------|----------------------------|
| ![Home](<img width="1911" height="908" alt="image" src="https://github.com/user-attachments/assets/a7c58c85-83fd-461a-83b2-2e78758b6a7f" />
) | ![Repos](<img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/d15b188e-b0ad-401e-8d77-0efd2fdd40fc" />
s) | ![Users](<img width="1901" height="910" alt="image" src="https://github.com/user-attachments/assets/de6b558c-899e-4600-a83c-5de9fa1b8685" />
) |

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


🛠️ Installation & Setup
1. Clone the repository
Bashgit clone https://github.com/SaiAkhil145/Eva-Bharat-Github-Explorer.git
2. Navigate to the project directory
Bashcd Eva-Bharat-Github-Explorer
3. Install dependencies
Bashnpm install
4. Start the development server
Bashnpm run dev

🔌 API Endpoints Used

Search Users: https://api.github.com/search/users?q={query}
Get User Repositories: https://api.github.com/users/{username}/repos


🔥 Key Implementation Highlights

Custom reusable hooks for debouncing and data fetching
Optimized API calls with debounced search
Clean separation of UI and business logic
Proper loading, error, and empty states handling
Persistent bookmarking across browser sessions
Server-side pagination for scalability


🚀 Future Improvements

Infinite scrolling for repositories
API response caching
Advanced multi-select filtering and tags
Smooth animations and transitions
System preference-based dark/light mode toggle


👨‍💻 Author
Sai Akhil

GitHub: @SaiAkhil145


⭐ If you liked this project, please give it a star! ⭐
Made with ❤️ for the developer community
text---

**How to use:**
1. Copy all the content above
2. Paste it into your project's `README.md` file (replace the existing content)
3. Update the following:
   - Live Demo link
   - Banner image link (top)
   - Screenshot images (in the table)

Would you like me to also give you a version with **GitHub badges** (stars, forks, license, etc.) at the top for a more premium look? Just say yes!1sFast
