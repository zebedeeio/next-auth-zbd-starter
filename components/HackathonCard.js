import React from "react";
import ButtonSecondary from "@/components/ButtonSecondary";

const HackathonCard = ({ headerText, descriptionText, buttonLink = "#" }) => {
  return (
    <div className="w-full md:w-60 h-80 rounded-md border-solid border-2 border-purple-600 flex flex-col text-left">
      <img
        className="w-full h-24 object-cover object-center border-solid border-b-2 border-purple-500"
        src="/hackathon-card.svg"
        alt="Card Image"
      />

      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{headerText}</div>
        <p className="text-gray-200 text-base">{descriptionText}</p>
      </div>
      <div className="self-end p-4">
        <ButtonSecondary buttonText={"View"} buttonLink={buttonLink} />
      </div>
    </div>
  );
};

export default HackathonCard;
