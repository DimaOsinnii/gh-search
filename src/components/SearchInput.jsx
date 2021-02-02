import React from "react";

export default ({ onNameChange, value }) => {
  return (
    <>
      <input
        value={value}
        type="text"
        placeholder="Enter repository name"
        onChange={onNameChange}
      />
    </>
  );
};
