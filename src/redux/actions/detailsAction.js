import yts from "../../api/yts";

const detailsAction = (movieIds) => async (dispatch) => {
  const response = await yts.get("/movie_details.json", {
    params: {
      movie_id: movieIds,
      with_cast: true,
    },
  });

  const data = response.data.data.movie;
  dispatch({ type: "DETAILS", payload: data });
};

export default detailsAction;
