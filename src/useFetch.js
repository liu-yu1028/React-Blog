import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setIsLoading(true); // 確保在等待 id 時是載入狀態
      setData(null);
      setError(null);
      return;
    }

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("無法取得資料來源");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 100);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
