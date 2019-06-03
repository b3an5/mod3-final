import * as actions from "../actions/index";
import { errorReducer } from "./errorReducer";

describe("error reducer", () => {
  it("should return default state", () => {
    const expected = false;
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return a bool of true if HAS_ERRORED is the type", () => {
    const expected = true;
    const result = errorReducer(false, actions.errored(true));
    expect(result).toEqual(expected);
  });
});
