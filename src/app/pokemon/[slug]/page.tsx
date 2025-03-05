import PokemonDetailPage from "@/components/pokemonPage";
import { getPokemonData } from "@/services/pokemon";
import React from "react";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const pokemon = await getPokemonData(slug);

  return <PokemonDetailPage pokemon={pokemon} />;
};

export default Page;
