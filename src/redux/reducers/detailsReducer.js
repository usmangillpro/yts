const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case "DETAILS":
      return action.payload;

    default:
      return state;
  }
};

export default detailsReducer;
