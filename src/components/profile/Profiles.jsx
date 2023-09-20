import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

export const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <>No Profiles Found...</>
            )}
          </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  getProfiles: () => dispatch(getProfiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
