import { combineReducers } from "redux";
import { allPresidentsReducer } from "./allPresidentsReducer";
import { loadingReducer } from "./loadingReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  allPresidents: allPresidentsReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer
});

export default rootReducer;
