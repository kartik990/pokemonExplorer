import useSWR from "swr";
import axios from "axios";
import { Pokemon } from "@/types/pokemon";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useLazyPokemon = (url: string) => {
  const { data, error } = useSWR<Pokemon>(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};
