import { PokemonListResponse } from "@/types/pokemon";
import api from "./api";

export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await api.get(`${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pokemon:", error);
    throw error;
  }
};

export const getAllPokemon = async (): Promise<PokemonListResponse> => {
  try {
    const response = await api.get(`?limit=1500&offset=0`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon list:`, error);
    throw error;
  }
};
