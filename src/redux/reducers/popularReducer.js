const popularReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULAR":
      return action.payload;
    default:
      return state;
  }
};

export default popularReducer;
