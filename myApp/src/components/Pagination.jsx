export default function Pagination({ page, setPage, total }) {
  const totalPages = Math.min(Math.ceil(total / 10), 10)

  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        ← Prev
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
      >
        Next →
      </button>
    </div>
  )
}