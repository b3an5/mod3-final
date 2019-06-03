import * as actions from "./index";

describe("actions", () => {
  it("should have a type of GRAB_ALL_PRESIDENTS", () => {
    const presidents = [
      { president: "GW", number: 1 },
      { president: "JA", number: 2 }
    ];
    const result = actions.grabAllPresidents(presidents);
    const expected = {
      type: "GRAB_ALL_PRESIDENTS",
      presidents
    };

    expect(result).toEqual(expected);
  });
  it("should have a type of IS_LOADING", () => {
    const bool = false;
    const result = actions.loading(bool);
    const expected = {
      type: "IS_LOADING",
      bool
    };

    expect(result).toEqual(expected);
  });
  it("should have a type of HAS_ERRORED", () => {
    const bool = false;
    const result = actions.errored(bool);
    const expected = {
      type: "HAS_ERRORED",
      bool
    };

    expect(result).toEqual(expected);
  });
});
