import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../store/actions";

import ListOfRepos from "../components/ListOfRepos";
import SearchInput from "../components/SearchInput";
import RecentRepos from "../components/RecentRepos";

export default () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const reposByName = useSelector((state) => state.allRepos[inputValue]);
  const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {
    if (inputValue.length >= 4 && !reposByName) {
      dispatch(getData(inputValue, 1));
    }
  }, [inputValue]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  return (
    <section className="container">
      <SearchInput value={inputValue} onNameChange={handleSearchChange} />
      <RecentRepos onRecentClick={setInputValue} />
      {isFetching && !reposByName ? (
        <p>...Loading</p>
      ) : (
        <ListOfRepos inputValue={inputValue} repos={reposByName} />
      )}
    </section>
  );
};
