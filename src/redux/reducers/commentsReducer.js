const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS":
      return action.payload;
    default:
      return state;
  }
};
export default commentsReducer;
