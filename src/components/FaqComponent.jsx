"use client";

import { useState } from "react";

function FaqComponent({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="text-lg  transition-none duration-300">
      <div
        onClick={handleClick}
        className="flex font-freight font-normal justify-between px-10 py-6 cursor-pointer "
      >
        <h2>{title}</h2>
        {isOpen ? <span>&times;</span> : <span>&darr;</span>}
      </div>
      <p
        className={`font-freight font-light text-left  px-10 pb-4 ${
          !isOpen && "hidden"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default FaqComponent;
