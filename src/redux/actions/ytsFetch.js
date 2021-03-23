import yts from "../../api/yts";

const ytsFetch = () => async (dispatch) => {
  const response = await yts.get("/list_movies.json", {
    params: {
      limit: 8,
    },
  });
  const data = response.data.data.movies;
  dispatch({ type: "YTS_FETCH", payload: data });
};

export default ytsFetch;
