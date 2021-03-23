import yts from "../../api/yts";

const popularAction = () => async (dispatch) => {
  const response = await yts.get("/list_movies.json", {
    params: {
      limit: 4,
      sort_by: "year",
      minimum_rating: 8,
    },
  });
  const data = response.data.data.movies;
  if (data) {
    dispatch({ type: "POPULAR", payload: data });
  }
};

export default popularAction;
