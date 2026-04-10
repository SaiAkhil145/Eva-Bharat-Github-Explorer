export default function RepoCard({ repo, onBookmark, isBookmarked }) {
  return (
    <div className="repo-card">
      <div className="repo-header">
        <h3>{repo.name}</h3>
        <button
          className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
          onClick={() => onBookmark(repo)}
        >
          {isBookmarked ? "Saved" : "Save"}
        </button>
      </div>

      <p className="repo-desc">
        {repo.description || "No description provided"}
      </p>

      <div className="repo-footer">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span className="repo-lang">{repo.language || "N/A"}</span>
      </div>
    </div>
  )
}