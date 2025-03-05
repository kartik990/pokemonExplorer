import { Pokemon } from "@/types/pokemon";
import { typeLabelToColor, typeLabelToImgMapping } from "@/utils";
import Image from "next/image";
import React from "react";
import Tag from "../ui/typography/Tag";
import Title from "../ui/typography/Title";
import ProgressBar from "./ProgesBar.tsx";
import DetailCard from "./DetailCard.tsx";
import AbilityBadge from "./AbilityBadge";
import Label from "../ui/typography/Label";
import { ArrowLeft, Ruler, Weight } from "lucide-react";
import Link from "next/link";
import MoveBadge from "./MoveBadge";

interface PokemonDetailPageProps {
  pokemon: Pokemon;
}

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ pokemon }) => {
  const ty = pokemon.types[0].type.name;
  const customCol = typeLabelToColor[ty];

  return (
    <div
      className="w-full overflow-x-hidden min-h-[140vh] flex flex-col items-end"
      style={{ backgroundColor: customCol }}
    >
      <div className="hidden lg:block relative w-full h-full z-10 ">
        <div className=" left-[250px] absolute skew-x-6 w-[75%] h-[140vh] z-10 min-h-[100vh] bg-gray-50  transform " />
        <div className=" right-0 absolute w-[70%] min-h-[100vh] h-[140vh] bg-gray-50 z-10 transform " />
      </div>

      <div className="w-full lg:max-w-[80%] flex flex-col md:p-10 lg:p-20 px-0 lg:px-32 relative">
        <div
          className="flex justify-between items-center px-4 lg:px-0 py-4 lg:py-0 bg-white lg:bg-transparent z-40 border-b-4 lg:pb-4 md:rounded-lg lg:rounded-none"
          style={{ borderBottomColor: customCol }}
        >
          <div
            className="text-xl md:text-3xl font-bold capitalize"
            style={{ color: customCol }}
          >
            {pokemon.name}
          </div>

          <div className="flex gap-2 ">
            {pokemon?.types?.map((type) => {
              const ty = type.type.name;

              return (
                <div
                  key={ty}
                  className="flex items-center py-1 md:py-2 text-sm md:text-md shadow-lg gap-1 px-3 rounded-md"
                  style={{ backgroundColor: typeLabelToColor[ty] }}
                >
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
          </div>
        </div>
        <Link href="/">
          <div className="p-2 lg:absolute text-sm md:text-md cursor-pointer md:top-[12%] md:-left-[20%]">
            <Label>
              <ArrowLeft />
              Back
            </Label>
          </div>
        </Link>
        <div className="lg:absolute z-50 -left-[18%] top-[32%] ">
          <div>
            <Image
              src={
                pokemon?.sprites.other?.["official-artwork"]?.front_default ||
                "/placeholder.png"
              }
              alt={pokemon.name}
              width={300}
              height={300}
              objectFit="contain"
              className={`w-auto h-[240px] mx-auto md:h-[300px] z-50 `}
            />
          </div>
        </div>
        <div className="w-full mt-6 grid md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0 pb-6 md:pb-0">
          <DetailCard sz="large">
            <Title isDark> Stats</Title>
            <div className="w-[100%] mt-4 flex flex-col gap-3">
              {pokemon.stats.map((st) => {
                return (
                  <div
                    key={st.stat.name}
                    className="flex flex-wrap gap-2 items-center"
                  >
                    <div className="text-gray-500 text-sm font-medium capitalize">
                      {st.stat.name}
                    </div>
                    <ProgressBar percent={st.base_stat} stat={st.stat.name} />
                  </div>
                );
              })}
            </div>
          </DetailCard>

          <DetailCard sz="small">
            <Title isDark> Breeding</Title>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-4 text-sm">
              <div className="flex border-2 border-gray-200 rounded-md px-2 md:px-4 py-2  gap-2 items-center text-gray-600  bg-white font-medium">
                <Ruler className="scale-90" /> Height :
                <div>{pokemon.height}</div>
              </div>
              <div className="flex border-2 border-gray-200 rounded-md px-2 md:px-4 py-2  gap-2 items-center text-gray-600 bg-white font-medium">
                <Weight className="scale-90" /> Weight :
                <div>{pokemon.weight}</div>
              </div>
            </div>
          </DetailCard>

          <DetailCard sz="large">
            <Title isDark> Moves</Title>
            <div className="flex flex-wrap max-h-[280px] py-4 pr-2 overflow-auto gap-3 mt-4 text-sm">
              {pokemon?.moves?.map((mv) => {
                return (
                  <div key={mv.move.name} className="">
                    <MoveBadge move={mv.move.name} />
                  </div>
                );
              })}
            </div>
          </DetailCard>

          <DetailCard sz="small">
            <Title isDark> Abilities</Title>
            <div className="flex flex-wrap gap-2 mt-4">
              {pokemon.abilities.map((ab) => {
                return (
                  <AbilityBadge
                    key={ab.ability.name}
                    ability={ab.ability.name}
                  />
                );
              })}
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
