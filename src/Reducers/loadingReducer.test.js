import * as actions from "../actions/index";
import { loadingReducer } from "./loadingReducer";

describe("loading reducer", () => {
  it("should return default state", () => {
    const expected = true;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return a bool of true if IS_LOADING is the type", () => {
    const expected = false;
    const result = loadingReducer(false, actions.loading(false));
    expect(result).toEqual(expected);
  });
});
