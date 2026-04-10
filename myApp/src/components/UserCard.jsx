import { useNavigate } from "react-router-dom"

export default function UserCard({ user }) {
  const navigate = useNavigate()

  return (
    <div
      className="user-card"
      onClick={() => navigate(`/user/${user.login}`)}
    >
      <div className="avatar-wrapper">
        <img src={user.avatar_url} alt={user.login} />
      </div>

      <div className="user-info">
        <h3>{user.login}</h3>
        <span>View Profile →</span>
      </div>
    </div>
  )
}