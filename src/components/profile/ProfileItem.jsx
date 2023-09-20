import React from "react";
import { Link } from "react-router-dom";

export const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile bg-light" key={_id}>
      <img className="round-img" src={avatar} alt="" />
      <div>
        <h2>{name}</h2>
        <p>
          {status}
          {company && <span>&nbsp;at {company}</span>}
        </p>
        <p>{location && <span> {location}</span>}</p>
        <br />
        <Link to="/profile" className="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        {skills.slice(0,4).map((skill, index) => (
          <li className="text-primary" key={index}>
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
