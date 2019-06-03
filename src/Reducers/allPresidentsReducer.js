export const allPresidentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GRAB_ALL_PRESIDENTS":
      return action.presidents;
    default:
      return state;
  }
};
