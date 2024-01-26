import React from "react";
import { Link } from "react-router-dom";

const DarkButton = ({ content, style }) => {
  return (
    <Link to={"/UserAdmission"} className={`dark-button ${style}`}>
      {content}
    </Link>
  );
};

export default DarkButton;
