import { useParams } from "react-router-dom"
import { useState } from "react"
import useFetchRepos from "../hooks/useFetchRepos"
import RepoCard from "../components/RepoCard"
import SpinnerLoader from "../components/SpinnerLoader"
import Empty from "../components/Empty"
import Error from "../components/Error"
export default function UserRepos() {
  const { username } = useParams()
  const { repos, loading, error } = useFetchRepos(username)

  const [sort, setSort] = useState("")
  const [language, setLanguage] = useState("")
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("repos")) || []
  )

  const toggleBookmark = (repo) => {
    const updated = bookmarks.find(r => r.id === repo.id)
      ? bookmarks.filter(r => r.id !== repo.id)
      : [...bookmarks, repo]

    setBookmarks(updated)
    localStorage.setItem("repos", JSON.stringify(updated))
  }

  const processed = [...repos]
    .filter(r =>
      language
        ? r.language?.toLowerCase().includes(language.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (sort === "stars") return b.stargazers_count - a.stargazers_count
      if (sort === "forks") return b.forks_count - a.forks_count
      return 0
    })

  return (
    <div className="container">
      <h2 className="user-repo-name">{username}'s Repositories</h2>

      <div className="controls">
        <select
          className="control-input"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
        </select>

        <input
          className="control-input"
          placeholder="Filter by language (e.g. JavaScript)"
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
      {loading && <SpinnerLoader />}

      {error && <Error message={error} />}

     
      {!loading && !error && processed.length === 0 && (
       <Empty message={`No repositories found for ${username}`} />
      )}

     
      {!loading && !error && processed.length > 0 && (
        <div className="grid">
          {processed.map(repo => (
            <RepoCard
              key={repo.id}
              repo={repo}
              onBookmark={toggleBookmark}
              isBookmarked={bookmarks.some(b => b.id === repo.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}