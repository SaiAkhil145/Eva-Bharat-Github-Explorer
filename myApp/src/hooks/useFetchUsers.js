// import { useEffect, useState } from "react"
// import { searchUsers } from "../api/githubApi"

// export default function useFetchUsers(query) {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     if (!query) return

//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         setError(null)
//         const res = await searchUsers(query)
//         setData(res.items || [])
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [query])

//   return { data, loading, error }
// }
import { useEffect, useState } from "react"
import { searchUsers } from "../api/githubApi"

export default function useFetchUsers(query, page) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!query) {
      setData([])
      return
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await searchUsers(query, page)

        setData(res.items || [])
        setTotal(res.total_count)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, page])

  return { data, loading, error, total }
}