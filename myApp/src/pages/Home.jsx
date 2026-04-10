import { useState } from "react"
import { SearchX, Users } from "lucide-react"

import useDebounce from "../hooks/useDebounce"
import useFetchUsers from "../hooks/useFetchUsers"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import Pagination from "../components/Pagination"
import Empty from "../components/Empty"
import SpinnerLoader from "../components/SpinnerLoader"

export default function Home() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const debounced = useDebounce(query)

  const { data, loading, total } = useFetchUsers(
    debounced,
    page
  )

  const handleSearch = (val) => {
    setQuery(val)
    setPage(1)
  }

  return (
    <div className="container">
      <SearchBar value={query} onChange={handleSearch} />

      {loading && <SpinnerLoader />}

      {!query && !loading && (
        <Empty 
          message="Start searching to find users"
          icon={SearchX}
        />
      )}

      {query && !loading && data.length === 0 && (
        <Empty 
          message="No users found"
          icon={Users}
        />
      )}

      {query && data.length > 0 && (
        <>
          <div className="grid">
            {data.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          <Pagination
            page={page}
            setPage={setPage}
            total={total}
          />
        </>
      )}
    </div>
  )
}