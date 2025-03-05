import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { useLazyPokemon } from "../../hooks/usePokemon";
import { LabeledAPIResource } from "@/types/pokemon";
import Image from "next/image";
import Label from "../ui/typography/Label";
import Tag from "../ui/typography/Tag";
import Loader from "../ui/Loader";
import { typeLabelToImgMapping } from "@/utils";

interface PokemonCardProps {
  pokemonResource: LabeledAPIResource;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemonResource }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { pokemon, isLoading } = useLazyPokemon(
    inView ? pokemonResource.url : ""
  );

  return (
    <div
      ref={ref}
      className={`cursor-pointer min-w-[320px] hover:scale-105 hover:transition`}
    >
      <div
        className={`flex flex-col items-center gap-4  bg-[#003a70] rounded-xl bg p-6`}
      >
        <div>
          {isLoading ? (
            <div className="w-full h-[180px] flex justify-center items-center">
              <Loader size="45" />
            </div>
          ) : (
            <Image
              src={
                pokemon?.sprites.other?.["official-artwork"]?.front_default ||
                "/placeholder.png"
              }
              alt={pokemonResource.name}
              width={180}
              height={180}
              objectFit="contain"
              className={`w-full h-[180px] `}
            />
          )}
        </div>
        <div className="bg-white h-[0.4px] w-full" />
        <div className="self-start  flex flex-col gap-2">
          <Label>{pokemonResource.name}</Label>
          {isLoading ? (
            <div className="h-6 w-full"></div>
          ) : (
            <div className="flex gap-2">
              <>
                <Tag>Type: </Tag>
                {pokemon?.types?.map((type) => {
                  const ty = type.type.name;

                  return (
                    <div key={ty} className="flex items-center gap-1">
                      <Image
                        width={50}
                        height={50}
                        alt="type"
                        src={typeLabelToImgMapping[ty]}
                        className="w-6 "
                      />{" "}
                      <Tag>{ty}</Tag>
                    </div>
                  );
                })}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
