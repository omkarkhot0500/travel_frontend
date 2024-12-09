import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {IoMdClose} from 'react-icons/io'

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center rounded-md bg-slate-100 px-[8px]">
      <input
        type="text"
        placeholder="Search Notes"
        className="text-xs w-full bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
        aria-label="Search Notes"
      />

      {value && (<IoMdClose className="text-xl text-slate-400 cursor-pointer hover:text-black mr-2" onClick={onClearSearch}/>)}

      <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black" onClick={handleSearch}/>
    </div>
  );
};

export default SearchBar;
