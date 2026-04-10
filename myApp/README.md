
# GitHub Explorer

## Overview

GitHub Explorer is a React-based web application that allows users to search for GitHub profiles and explore their repositories. The application provides features like search optimization, repository filtering, sorting, pagination, and bookmarking, with a clean and responsive user interface.



## Features

### User Search

* Search GitHub users using the GitHub REST API
* Debounced input to reduce unnecessary API calls
* Displays user avatar and username

### Repository Exploration

* View repositories of a selected user
* Displays repository name, description, stars, forks, and language

### State Handling

* Loading state using spinner and skeleton loaders
* Error handling with retry support
* Empty states for no results and filtered results

### Search Optimization

* Debouncing implemented (300–500ms delay)

### Filtering and Sorting

* Sort repositories by stars and forks
* Filter repositories by programming language (case-insensitive, partial match supported)

### Pagination

* API-based pagination for user search results

### Bookmarking

* Save and remove repositories using localStorage
* Persist bookmarks across sessions

### UI/UX

* Clean and modern interface
* Fully responsive across devices
* Dark mode support



## Tech Stack

* React (Functional Components)
* React Router
* JavaScript (ES6+)
* CSS (custom styling, no UI libraries)
* GitHub REST API

---

## Project Structure

```
src/
  api/
    githubApi.js
  components/
    Navbar.jsx
    SearchBar.jsx
    UserCard.jsx
    RepoCard.jsx
    SpinnerLoader.jsx
    Empty.jsx
    Error.jsx
    Pagination.jsx
  hooks/
    useDebounce.js
    useFetchUsers.js
    useFetchRepos.js
  pages/
    Home.jsx
    UserRepos.jsx
  styles/
    global.css
    components.css
    variables.css
  App.jsx
  main.jsx
```

---

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/github-explorer.git
```

2. Navigate to the project directory

```
cd github-explorer
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

---

## API Endpoints Used

* Search Users
  [https://api.github.com/search/users?q={query}](https://api.github.com/search/users?q={query})

* Get User Repositories
  [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)

---

## Key Implementation Details

* Custom hooks are used to separate logic from UI
* Debouncing prevents excessive API calls during typing
* Conditional rendering ensures proper handling of loading, error, and empty states
* LocalStorage is used to persist bookmarked repositories
* API pagination is implemented instead of client-side slicing

---

## Future Improvements

* Infinite scroll for better user experience
* API caching to reduce redundant requests
* Improved filtering UI with dropdowns or chips





