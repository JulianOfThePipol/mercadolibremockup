import { useCallback, useEffect, useState } from "react";
import { apiMercadoLibre } from "../services";

export function useFetch({ url }) {
  const [data, setData] = useState();

  const fetch = useCallback(async () => {
    const response = await apiMercadoLibre.get(url);
    console.log("response", response.data)
    setData(response.data);
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch, url]);

  return { data, fetch };
}