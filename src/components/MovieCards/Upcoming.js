import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import upcomingAction from "../../redux/actions/upcomingAction";

const Upcoming = () => {
  const data = useSelector((state) => state.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(upcomingAction());
  }, [dispatch]);

  console.log(data);
  return <div className={data.length > 0 ? "d-block" : "d-none"}>Upcoming</div>;
};

export default Upcoming;
