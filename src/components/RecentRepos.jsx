import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const reposName = useSelector(({ allRepos }) => Object.keys(allRepos));

  return (
    <div>
      {reposName.map((name, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <h1 key={index}>{name}</h1>
      ))}
    </div>
  );
};
