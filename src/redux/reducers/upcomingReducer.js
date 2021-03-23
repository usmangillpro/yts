const upcomingReducer = (state = [], action) => {
  switch (action.type) {
    case "UPCOMING":
      return action.payload;
    default:
      return state;
  }
};

export default upcomingReducer;
