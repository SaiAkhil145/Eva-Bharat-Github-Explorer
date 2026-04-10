import { Star, GitFork, Bookmark } from "lucide-react";

export default function RepoCard({ repo, onBookmark, isBookmarked }) {
  return (
    <div className="repo-card">
      <div className="repo-header">
        <h3>{repo.name}</h3>

        <button
          className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
          onClick={() => onBookmark(repo)}
        >
          <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
          <span>{isBookmarked ? "Saved" : "Save"}</span>
        </button>
      </div>

      <p className="repo-desc">
        {repo.description || "No description provided"}
      </p>

      <div className="repo-footer">
        <span className="repo-stat">
          <Star size={16} />
          {repo.stargazers_count}
        </span>

        <span className="repo-stat">
          <GitFork size={16} />
          {repo.forks_count}
        </span>

        <span className="repo-lang">
          {repo.language || "N/A"}
        </span>
      </div>
    </div>
  );
}