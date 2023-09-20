import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEduction from "./ProfileEduction";
import ProfileGithub from "./ProfileGithub";

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
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                profile.experience.map((exp) => (
                  <ProfileExperience experience={exp} key={exp._id} />
                ))
              ) : (
                <div>No Experience credentials</div>
              )}
            </div>
            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                profile.education.map((edu) => (
                  <ProfileEduction education={edu} key={edu._id} />
                ))
              ) : (
                <div>No Experience credentials</div>
              )}
            </div>
          </div>
          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
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
