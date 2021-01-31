import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getData } from "../store/actions";

import ListOfRepositories from "../components/ListOfRepos";
import SearchInput from "../components/SearchInput";

export default () => {
  const dispatch = useDispatch();
  const { repos, page } = useSelector(
    (state) => state.currentRepos,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getData("java", page));
  }, []);
  return (
    <>
      <SearchInput />
      <ListOfRepositories repos={repos} />
      <button onClick={() => dispatch(getData("java", page))}>Get more</button>
    </>
  );
};
