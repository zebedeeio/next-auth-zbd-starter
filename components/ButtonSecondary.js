import React from "react";
import Link from "next/link";

const ButtonSecondary = ({
  buttonText,
  buttonLink = "#",
  functionCall = undefined,
}) => {
  return (
    <div>
      <Link href={buttonLink} onClick={functionCall || undefined}>
        <button className="w-15 md:w-30 border-1 border-purple-500 hover:bg-purple-500 text-white border-solid border-2 font-bold py-2 px-6 rounded-full">
          <div className="flex justify-between align-middle">
            <span className="mr-2text-sm">{buttonText}</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ButtonSecondary;
