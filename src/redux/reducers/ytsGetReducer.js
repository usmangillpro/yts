const ytsGetReducer = (state = [], action) => {
  switch (action.type) {
    case "YTS_FETCH":
      return action.payload;
    default:
      return state;
  }
};

export default ytsGetReducer;
