import yts from "../../api/yts";

const commentsAction = (id) => async (dispatch) => {
  const response = await yts.get("/movie_comments.json", {
    params: {
      movie_id: id,
    },
  });
  const data = response.data.data;
  console.log(response);

  dispatch({ type: "COMMENTS", payload: data });
};

export default commentsAction;
