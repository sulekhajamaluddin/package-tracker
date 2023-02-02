import { useEffect, useState, useRef } from "react";

export default function useFetch(url) {
  const prevUrl = useRef("");
  console.log("inside use fetch");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(prevUrl.current);
  console.log(url);
  console.log("The urls are equal:" + areEqual(prevUrl.current, url));
  useEffect(() => {
    if (areEqual(prevUrl.current, url)) return;
    prevUrl.current = url;
    async function init() {
      console.log("inside useeffect");
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  console.log(data, loading, error);
  return { data, loading, error };
}

function areEqual(stringOne, stringTwo) {
  return stringOne === stringTwo;
}
