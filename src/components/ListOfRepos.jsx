import React from "react";
import ListItem from "./ListOfRepos/ListElement";

export default (repos) => {
  if (!repos.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {repos.map((repo) => (
        <ListItem key={repo.id} {...repo} />
      ))}
    </>
  );
};
