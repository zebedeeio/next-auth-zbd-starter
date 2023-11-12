import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ButtonPrimary = ({
  buttonText,
  buttonLink = "#",
  functionCall = undefined,
}) => {
  return (
    <div>
      <Link href={buttonLink} onClick={functionCall || undefined}>
        <button className="w-15 md:w-30 bg-lime-400 hover:bg-lime-600 text-white border-solid border-2 border-black font-bold py-2 px-6 rounded-full">
          <div className="flex justify-between align-middle">
            <span className="mr-2 text-black xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-xs ">
              {buttonText}
            </span>
            <ArrowRight
              color="black"
              size={28}
              className="hidden sm:inline-block border-solid border-2 border-black bg-white hover:bg-gray-300 rounded-full"
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ButtonPrimary;
