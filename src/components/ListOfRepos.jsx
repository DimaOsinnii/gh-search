import React from "react";
import ListItem from "./ListOfRepos/ListElement";

export default ({ repos }) => {
  if (!repos || repos.length) {
    return <p>There are no repos yet</p>;
  }

  return (
    <>
      <ul>
        {repos.repos.map((repo) => (
          <ListItem key={repo.id} {...repo} />
        ))}
      </ul>
    </>
  );
};
