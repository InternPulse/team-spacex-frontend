import React from "react";

const DarkButton = ({ content, style }) => {
  return <div className={`dark-button ${style}`}>{content}</div>;
};

export default DarkButton;
