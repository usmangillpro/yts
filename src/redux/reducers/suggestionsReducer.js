const suggestionsReducer = (state = [], action) => {
  switch (action.type) {
    case "SUGGESTIONS":
      return action.payload;
    default:
      return state;
  }
};

export default suggestionsReducer;
