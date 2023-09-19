import React, { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

function Dashboard({ getCurrentProfile }) {
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />{" "}
          <Experience  experience={profile.experience}/>
          <Education education={profile.education}/>
        </Fragment>
      ) : (
        <>
          {" "}
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentProfile: () => dispatch(getCurrentProfile()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
