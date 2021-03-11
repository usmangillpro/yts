import yts from "../../api/yts";

const searchAction = (term) => async (dispatch) => {
  const response = await yts.get("/list_movies.json", {
    params: {
      query_term: term,
      sort_by: "download_count",
    },
  });
  const data = response.data.data.movies;
  if (data) {
    dispatch({ type: "SEARCH", payload: data });
  }
};

export default searchAction;
