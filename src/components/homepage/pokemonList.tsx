import { LabeledAPIResource } from "@/types/pokemon";
import PokemonCard from "./pokemonCard";
import Link from "next/link";

interface PokemonListProps {
  pokemonList: LabeledAPIResource[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  return (
    <div className="flex justify-center p-5 md:p-10 flex-wrap gap-8 ">
      {pokemonList.length == 0 && (
        <div className="h-80 text-lg">No pokemon to show...</div>
      )}

      {pokemonList.map((listItem) => (
        <Link key={listItem.name} href={`/pokemon/${listItem.name}`}>
          <PokemonCard pokemonResource={listItem} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
