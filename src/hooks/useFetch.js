import { useState, useEffect } from "react";
import { GetPokeInfo, GetData } from "../API/PokeAPI";

export function useFetch(url) {
  const [pokeData, setPokeData] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        GetPokeInfo(url).then((data) => {
          setPokeData(data.array);
          setPrevious(data.previous);
          setNext(data.next);
        });
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { pokeData, previous, next, error };
}

export function usePokeId(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        GetData(url).then((data) => setData(data));
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
}
