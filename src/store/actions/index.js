import { urls, getMethod } from "../../utils/api";

import * as actions from "../../constants";

export const getRepositories = () => ({
  type: actions.GET_REPOSITORIES,
});

export const setRepositories = (payload, name, page) => ({
  type: actions.GET_REPOSITORIES_SUCCESS,
  payload,
  name,
  page,
});

export const setRepositoriesFailure = (error) => ({
  type: actions.GET_REPOSITORIES_FAILURE,
  error,
});

export const getData = (name, page) => {
  const url = `repositories?q=${name}in:name&sort=stars&page=${page}&per_page=30`;

  return (dispatch) => {
    dispatch(getRepositories());
    getMethod(urls.get.REPOS + url)
      .then((res) => dispatch(setRepositories(res.data.items, name, page)))
      .catch((err) => {
        dispatch(setRepositoriesFailure(err));
      });
  };
};
