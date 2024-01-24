import React from "react";

const LightButton = ({ url, content, style }) => {
  return (
    <button type="button" className={`light-button ${style}`}>
      <a href={url} target="_blank" rel="follow">
        {content}
      </a>
    </button>
  );
};

export default LightButton;
