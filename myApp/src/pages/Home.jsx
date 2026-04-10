// import { useState } from "react"
// import useDebounce from "../hooks/useDebounce"
// import useFetchUsers from "../hooks/useFetchUsers"
// import SearchBar from "../components/SearchBar"
// import UserCard from "../components/UserCard"
// import Empty from "../components/Empty"
// import Loader from "../components/SkeltonLoader"
// import SkeltonLoader from "../components/SkeltonLoader"

// export default function Home() {
//   const [query, setQuery] = useState("")
//   const debounced = useDebounce(query)

//   const { data, loading, error } = useFetchUsers(debounced)

//   return (
//   <div className="container">
//   <SearchBar value={query} onChange={setQuery} />

//   {loading && <SkeltonLoader/>}

//   {error && <p>{error}</p>}


//   {!query && !loading && (
//     <Empty message="Start searching to find users 🔍" />
//   )}

 
//   {query && !loading && data.length === 0 && (
//     <Empty message="No users found" />
//   )}

  
//   {query && data.length > 0 && (
//     <div className="grid">
//       {data.map((user) => (
//         <UserCard key={user.id} user={user} />
//       ))}
//     </div>
//   )}
// </div>
//   )
// }
import { useState } from "react"
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

  const { data, loading, error, total } = useFetchUsers(
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
        <Empty message="Start searching to find users 🔍" />
      )}

      {query && !loading && data.length === 0 && (
        <Empty message="No users found" />
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