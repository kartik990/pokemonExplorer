import { PokemonListResponse } from "@/types/pokemon";
import api from "./api";

export const getPokemonData = async (id: string) => {
  try {
    const response = await api.get(`${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getAllPokemon = async (): Promise<PokemonListResponse> => {
  try {
    const response = await api.get(`?limit=25&offset=0`);
    return response.data;
  } catch (error) {
    console.error(`Error all pokemon:`, error);
    throw error;
  }
};
