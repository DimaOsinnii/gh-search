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

  useEffect(() => {
    if (inputValue.length >= 4 && !reposByName) {
      dispatch(getData(inputValue, 1));
    }
  }, [inputValue]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value.trim());
  };
  const handleLoadMore = () =>
    dispatch(getData(inputValue, reposByName.page + 1));

  return (
    <>
      <SearchInput value={inputValue} onNameChange={handleSearchChange} />
      <ListOfRepos inputValue={inputValue} repos={reposByName} />
      <RecentRepos />
      <button type="button" onClick={handleLoadMore}>
        Get more
      </button>
    </>
  );
};
