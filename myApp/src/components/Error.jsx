import { AlertTriangle } from "lucide-react";

export default function Error({ message, onRetry }) {
  return (
    <div className="state-wrapper">
      <div className="state-card error">
        <div className="state-icon">
          <AlertTriangle size={40} strokeWidth={1.5} />
        </div>

        <h2>Something went wrong</h2>

        <p>{message || "Please try again later."}</p>

        {onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
}