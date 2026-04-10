import { useEffect, useState } from "react"
import { getUserRepos } from "../api/githubApi"

export default function useFetchRepos(username) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) return

    const fetchRepos = async () => {
      try {
        setLoading(true)
        const data = await getUserRepos(username)
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading, error }
}