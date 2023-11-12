import React from "react";

const SectionHeader = ({ headerText, descriptionText }) => {
  return (
    <div className="my-4">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {headerText}
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">{descriptionText}</p>
    </div>
  );
};

export default SectionHeader;
