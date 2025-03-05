import React, { useEffect, useState } from "react";
import Tag from "../ui/typography/Tag";
import { LabeledAPIResource } from "@/types/pokemon";
import { Search, X } from "lucide-react";
import Image from "next/image";

interface SearchProps {
  list: LabeledAPIResource[];
  setFilteredList: React.Dispatch<React.SetStateAction<LabeledAPIResource[]>>;
}

const SearchBar: React.FC<SearchProps> = ({ list, setFilteredList }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleResetSerachKey = () => {
    setSearchKey("");
  };

  useEffect(() => {
    const nwList = list.filter((it) =>
      it.name.toLowerCase().includes(searchKey.trim().toLowerCase())
    );

    setFilteredList(nwList);
  }, [searchKey, list, setFilteredList]);

  return (
    <div className="w-full flex justify-center mt-20 my-4 md:my-10 md:mt-20">
      <div className="bg-white flex items-center gap-2 px-4 py-0 pr-28 md:pr-36 rounded-lg text-md relative shadow-lg md:min-w-[60vw] ">
        <div>
          <Search className="scale-90 text-[#003a70]" />
        </div>
        <Image
          src="/images/bulbasur.png"
          width={500}
          height={500}
          className="w-auto h-18 absolute opacity-90 -top-16 left-[20%] translate-x-[-50%]"
          alt="pickachu saying hi image"
        />
        <Image
          src="/images/pica.png"
          width={500}
          height={500}
          className="w-auto h-18 absolute opacity-90 -top-18 left-[50%] translate-x-[-50%]"
          alt="pickachu saying hi image"
        />

        <Image
          src="/images/squirtle.png"
          width={500}
          height={500}
          className="w-auto h-18 absolute z-0 opacity-90 -top-[68px] left-[80%] translate-x-[-50%]"
          alt="pickachu saying hi image"
        />

        <input
          type="text"
          placeholder="Who are we looking for..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className="outline-none h-14  w-full "
        />
        {searchKey.length > 1 && (
          <div
            onClick={handleResetSerachKey}
            className="text-gray-400 absolute right-30 top-4 cursor-pointer"
          >
            <X />
          </div>
        )}
        <button className="bg-[#003a70] cursor-pointer hover:bg-[#3d7dca] py-2 px-6 rounded-lg text-white absolute top-2 right-2 text-md">
          <Tag>Search</Tag>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
