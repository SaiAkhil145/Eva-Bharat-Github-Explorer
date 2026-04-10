export default function SkeltonLoader() {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>

          <div className="skeleton-footer">
            <div className="skeleton-badge"></div>
            <div className="skeleton-badge"></div>
          </div>
        </div>
      ))}
    </div>
  )
}