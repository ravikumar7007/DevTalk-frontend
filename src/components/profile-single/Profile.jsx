import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";

export const Profile = ({
  profile: { profile, loading },
  auth,
  getProfileById,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <div>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <Link className="btn btn-primary" to="/profiles">
      Back to Profiles
          </Link>
          {!auth.loading &&
          auth.isAuthenticated &&
          auth.user._id === profile.user._id && (
            <Link to="/edit-profile" className="btn btn-dark">
              Edit Profile
            </Link>
          )}
          <div class="profile-grid my-1">
            <ProfileTop profile={profile} />
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileById: (id) => dispatch(getProfileById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
