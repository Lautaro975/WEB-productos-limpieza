"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, method = "GET", body = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const config = {
          method,
          url,
          data: body,
        };
        const { data } = await axios(config);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (url) {
      fetchData();
    }
  }, [url, method, body]);

  return { data, loading, error };
}

export default useFetch;
