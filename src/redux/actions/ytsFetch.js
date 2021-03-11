import yts from "../../api/yts";

const ytsFetch = () => async (dispatch) => {
  const response = await yts.get("/list_movies.json");
  const data = response.data.data.movies;
  // const data = response.map((res) => console.log(res));
  dispatch({ type: "YTS_FETCH", payload: data });
};

export default ytsFetch;
