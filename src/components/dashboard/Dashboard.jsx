import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

function Dashboard({ getCurrentProfile }) {
  const { profile, loading } = useSelector((state) => state.profile);
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (loading && profile === null) ? (
    <Spinner />
  ) : (
    <div className="container">Dashboard</div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentProfile: () => dispatch(getCurrentProfile()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
