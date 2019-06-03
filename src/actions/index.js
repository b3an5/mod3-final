export const grabAllPresidents = presidents => ({
  type: "GRAB_ALL_PRESIDENTS",
  presidents
});

export const loading = bool => ({
  type: "IS_LOADING",
  bool
});

export const errored = bool => ({
  type: "HAS_ERRORED",
  bool
});
