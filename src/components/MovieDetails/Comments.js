import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import commentsAction from "../../redux/actions/commentsAction";
const Comments = ({ movieId }) => {
  const data = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(commentsAction(movieId));
    }, 400);

    return () => clearTimeout(timer);
  }, [dispatch, movieId]);
  console.log(data);
  if (!data) return "loading";
  return <div>Comments</div>;
};

export default Comments;
