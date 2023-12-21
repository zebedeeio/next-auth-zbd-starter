import React from "react";
import Link from "next/link";

const ButtonPrimary = ({
  buttonText,
  buttonLink = false,
  functionCall = undefined,
}) => {
  return (
    <>
      {buttonLink ? (
        <Link href={buttonLink}>
          <button className="w-15 md:w-30 border-1 bg-purple-500 border-purple-500 hover:bg-purple-700 text-white border-solid border-2 font-bold py-2 px-6 rounded-full">
            <div className="flex justify-between align-middle">
              <span className="mr-2 text-sm">{buttonText}</span>
            </div>
          </button>
        </Link>
      ) : (
        <button className="w-15 md:w-30 border-1 bg-purple-500 border-purple-500 hover:bg-purple-700 text-white border-solid border-2 font-bold py-2 px-6 rounded-full">
          <div className="flex justify-between align-middle">
            <span className="mr-2 text-sm">{buttonText}</span>
          </div>
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
