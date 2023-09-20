import React, { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

function Dashboard({ getCurrentProfile ,deleteAccount}) {
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
          <DashboardActions /> <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2">
            <button className="btn btn-danger" onClick={()=>{deleteAccount()}}>
              <i className="fas fa-user-minus"></i>
              {"  "}Delete My Account
            </button>
          </div>
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
    deleteAccount:()=>dispatch(deleteAccount())
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
