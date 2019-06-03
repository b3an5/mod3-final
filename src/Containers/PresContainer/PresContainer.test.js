import {
  PresContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./PresContainer";
import { grabAllPresidents } from "../../actions";
import { errored } from "../../actions";
import { loading } from "../../actions";

describe("PresContainer", () => {
  describe("mapStateToProps", () => {
    it("should return an object with all presendents array, and a bool for loading and error", () => {
      const mockState = {
        allPresidents: [{ president: "gw" }],
        isLoading: true,
        hasErrored: false,
        somethingElse: "blah"
      };
      const expected = {
        allPresidents: [{ president: "gw" }],
        isLoading: true,
        hasErrored: false
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
  describe("map dispatch to props", () => {
    it("it should call dispatch with grabAllPresidents when component mounts", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = grabAllPresidents([{ president: "gw" }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.grabAllPresidents([{ president: "gw" }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("should call dispatch with hasErrored when component mounts", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = errored(true);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.errored(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("should call dispatch with isLoading when component mounts", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loading(false);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loading(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
