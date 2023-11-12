import React from "react";
import ButtonPrimary from "@/components/ButtonPrimary";

const HackathonCard = ({ headerText, descriptionText, buttonLink = "#" }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-sm border-solid border-2 border-black flex flex-col">
      <img
        className="w-full h-24 object-cover object-center border-solid border-b-2 border-black"
        src="https://i.imgur.com/JrOYjXg.png"
        alt="Card Image"
      />

      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{headerText}</div>
        <p className="text-gray-600 text-base">{descriptionText}</p>
      </div>
      <div className="self-end p-4">
        <ButtonPrimary buttonText={"View"} buttonLink={buttonLink} />
      </div>
    </div>
  );
};

export default HackathonCard;
