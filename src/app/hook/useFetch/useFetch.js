"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(idProducto) {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchProducto() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/productos/${idProducto}`
        );
        setLoading(true);
        setProducto(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (idProducto) {
      fetchProducto();
    }
  }, [idProducto]);

  return { producto, loading, error };
}

export default useFetch;
