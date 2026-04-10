import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, setPage, total }) {
  const totalPages = Math.min(Math.ceil(total / 10), 10);

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        <ChevronLeft size={18} />
        <span>Prev</span>
      </button>

      <span className="page-info">
        Page {page} of {totalPages}
      </span>

      <button
        className="page-btn"
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
}