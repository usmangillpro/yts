import yts from "../../api/yts";

const suggestionsAction = (id) => async (dispatch) => {
  const response = await yts.get("/movie_suggestions.json", {
    params: {
      movie_id: id,
    },
  });
  const data = response.data.data.movies;

  if (data) {
    dispatch({ type: "SUGGESTIONS", payload: data });
  }
};

export default suggestionsAction;
