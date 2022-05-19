import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { List }  from "../";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css"

export default function Search() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch({ url: `/sites/MLA/search?q=${searchValue}&offset=${page * 10}&limit=10` });

  function handleNextClick() {
    if (page<data.paging.total) 
    setPage(prevValue => prevValue + 1);
  }

  function handlePreviousClick () {
    if (page>1) 
    setPage(prevValue => prevValue - 1)
  }

  useEffect(() => {
    setPage(1)
  }, [searchValue])
  

  if (!data) {
    return <div>Loading...</div>
  }


  return (
    <div>
      <List data={data.results} />
      <div className="Search--paginacion">
        <button onClick={handlePreviousClick} className={(page>1)?"Search--arrows":"hidden"}>
        {"< "} Anterior  
        </button>
        <button className="Search--current">{page}</button>
        <p>de {data.paging.total}</p>
        <button onClick={handleNextClick} className={(page<data.paging.total)?"Search--arrows":"hidden"}>
          Siguiente  {" >"}
        </button>
    </div>
    </div>
  )
}