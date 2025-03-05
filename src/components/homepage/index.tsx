"use client";

import { LabeledAPIResource } from "@/types/pokemon";
import React, { useState } from "react";
import PokemonList from "./pokemonList";
import Image from "next/image";
import SearchBar from "./SearchBar";

interface HomePageProps {
  pokemonList: LabeledAPIResource[];
}

const HomePage: React.FC<HomePageProps> = ({ pokemonList }) => {
  const [filterdList, setFilteredList] = useState(pokemonList);

  return (
    <div className="bg-[#ffcb05]">
      <div className="flex justify-evenly py-10 pb-4 ">
        <Image
          src="/images/logo.png"
          width={1000}
          height={1000}
          alt="logo"
          className="w-[80%] md:w-[420px] h-auto"
        />
      </div>
      <SearchBar list={pokemonList} setFilteredList={setFilteredList} />
      <PokemonList pokemonList={filterdList} />
    </div>
  );
};

export default HomePage;
