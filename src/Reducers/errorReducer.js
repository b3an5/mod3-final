export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case "HAS_ERRORED":
      return action.bool;
    default:
      return state;
  }
};
