import * as actions from "../../constants";

const handleAdd = (state, action) => {
  const { payload, page, name } = action;
  if (state.find((elem) => elem.name === name) === undefined) {
    console.log(name);
    return [
      ...state,
      {
        page: page + 1,
        name,
        repos: [...payload],
      },
    ];
  }
  return state.map((elem) => {
    if (elem.name === name) {
      return {
        [name]: [...elem.repos, ...payload],
        page: page + 1,
      };
    }
    return elem;
  });
};

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case actions.GET_REPOSITORIES_SUCCESS:
      return handleAdd(state, action);
    default:
      return state;
  }
};
