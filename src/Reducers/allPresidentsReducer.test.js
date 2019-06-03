import * as actions from "../actions/index";
import { allPresidentsReducer } from "./allPresidentsReducer";

describe("allPresidentsReducer", () => {
  it("should return init state", () => {
    const expected = [];
    const result = allPresidentsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return presidents when case is GRAB_ALL_PRESIDENTS", () => {
    const mockPres = [
      { president: "GW", number: 1 },
      { president: "JA", number: 2 }
    ];
    const result = allPresidentsReducer(
      [],
      actions.grabAllPresidents(mockPres)
    );
    expect(result).toEqual(mockPres);
  });
});
