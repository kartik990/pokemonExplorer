import React, { useEffect, useState } from "react";
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
    <div className="w-full sticky flex justify-center mt-20 my-4 md:my-10 md:mt-20">
      <div className="bg-white flex items-center gap-2 px-6 py-0 rounded-lg text-md relative shadow-lg min-w-[90%] md:min-w-[60vw] ">
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
          className="outline-none h-14 ml-4 w-full "
        />
        {searchKey.length > 1 && (
          <div
            onClick={handleResetSerachKey}
            className="text-gray-400 cursor-pointer"
          >
            <X />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
