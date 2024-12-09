import React, { useState } from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  const [isTitleGreen, setIsTitleGreen] = useState(false);

  const handleCheckboxChange = () => {
    setIsTitleGreen(!isTitleGreen);
  };

  return (
    <div className="border-[#faa935] border-2 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <h6
              className={`text-sm font-medium ${
                isTitleGreen ? "text-green-600" : ""
              }`}
            >
              {title}
            </h6>
            <span className="text-xs text-slate-600">
              {moment(date).format("Do MMM YYYY")}
            </span>
          </div>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-primary" : "text-slate-600"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-slate-600 text-xs mt-2">{content}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-slate-600">
          {tags.map((item) => `#${item} `)}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
          <input
            type="checkbox"
            checked={isTitleGreen}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
