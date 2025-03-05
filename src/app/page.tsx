import HomePage from "@/components/homepage";
import { getAllPokemon } from "@/services/pokemon";

export default async function Home() {
  const res = await getAllPokemon();

  const pokemonList = res.results;

  return <HomePage pokemonList={pokemonList} />;
}
