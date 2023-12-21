import React from "react";

const PageHeader = ({ headerText, descriptionText }) => {
  return (
    <div>
      <div className="my-9">
        <h2 className="text-6xl mb-4">{headerText}</h2>
        <p className="text-xl">{descriptionText}</p>
      </div>
    </div>
  );
};

export default PageHeader;
