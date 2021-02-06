import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "./ListOfRepos/ListElement";

import { getData } from "../store/actions";

import "../styles/components/listOfRepos.less";

export default ({ repos, inputValue }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.isFetching);

  if (!repos) {
    return <p>There are no repos yet!</p>;
  }
  const handleLoadMore = () => dispatch(getData(inputValue, repos.page + 1));

  return (
    <article className="repos-wrapper">
      <ul className="repos-list">
        {repos.repos.map((repo) => (
          <ListItem key={repo.id} {...repo} />
        ))}
      </ul>
      <button className="button" type="button" onClick={handleLoadMore}>
        {isFetching ? "...Loading" : "Get more"}
      </button>
    </article>
  );
};
