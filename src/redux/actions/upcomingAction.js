import yts from "../../api/yts";

const upcomingAction = () => async (dispatch) => {
  const response = await yts.get("/list_upcoming.json");

  const data = response.data.data.movies;
  console.log(response);
  if (data) {
    dispatch({ type: "UPCOMING", payload: data });
  }
};

export default upcomingAction;
