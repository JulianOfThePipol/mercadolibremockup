import { useSearchParams } from "react-router-dom"

export default function Search() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  return (
    <div>Search: {searchValue}</div>
  )
}