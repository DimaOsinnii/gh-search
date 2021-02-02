import React from "react";
import "../styles/components/searchInput.less";

export default ({ onNameChange, value }) => {
  return (
    <input
      className="search-input"
      value={value}
      type="text"
      placeholder="Enter repository name"
      onChange={onNameChange}
    />
  );
};
