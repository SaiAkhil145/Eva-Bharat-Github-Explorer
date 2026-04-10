export default function Empty({ message }) {
  return (
    <div className="empty-wrapper">
      <div className="empty-card">
        <div className="empty-visual">
          <span>🔎</span>
        </div>

        <h2>{message}</h2>
        <p>Search GitHub users and explore repositories with ease</p>
      </div>
    </div>
  )
}