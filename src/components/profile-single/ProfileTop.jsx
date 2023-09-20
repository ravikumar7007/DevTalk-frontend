import React from "react";

function ProfileTop({
  profile: {
    user: { name, avatar },
    status,
    company,
    social,
    location,
    website,
  },
}) {
  console.log();
  return (
    <div class="profile-top bg-primary p-2">
      <img class="round-img my-1" src={avatar} alt="profile pic" />
      <h1 class="large">{name}</h1>
      <p class="lead">
        {" "}
        {status}
        {company && <span>&nbsp;at {company}</span>}
      </p>
      <p>{location && <span> {location}</span>}</p>
      <div class="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social &&
          Object.entries(social)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${key} fa-2x`}></i>
              </a>
            ))}
      </div>
    </div>
  );
}

export default ProfileTop;
