import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchCoinData = async () => {
      const raw = await fetch(url,{signal: controller.signal});
      if (!raw.ok) {
        throw new Error('fetch error')
      }
      const data = await raw.json();
      return data;
    };
    const populateData = async () => {
      const result = await fetchCoinData();
      setData(result);
      
    };

    try {
      setTimeout(()=> {
        populateData();
        setIsPending(false);
      }, 0);
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("fetch aborted");
      } else {
        console.log(e);
        setIsPending(false);
        setErr(e);
        return ()=> controller.abort()
      }
    }
    
    // fetchData()
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //   .then(res => {
    //     return res.json()

    //   })
    //   .then(c => {
    //     setCoins(c)

    //   }).catch(
    //     err => console.log(err)
    //   )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { data, isPending, err };
};
export default useFetch;