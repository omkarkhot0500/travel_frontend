import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const Taginput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-2 text-sm rounded text-slate-900 bg-slate-100 px-3 py-1">
              #{tag}
              <button>
                <MdClose onClick={() => {handleRemoveTag(tag)}} className=""></MdClose>
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 mt-4">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border px-3 py-2 outline-none rounded"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="w-8 h-8 flex items-center justify-center rounded border hover:bg-blue-700 border-blue-700 "
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Taginput;
