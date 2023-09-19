import React from "react";
import Moment from "react-moment";

function Experience({ experience }) {
  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => {
            return (
              <tr key={exp.id}>
                <td>{exp.company}</td>
                <td className="hide-sm">{exp.title}</td>
                <td className="hide-sm">
                  <Moment format="DD/MM/YYYY">{exp.from}</Moment>-
                  {exp.current ? (
                    "Now"
                  ) : (
                    <Moment format="DD/MM/YYYY">{exp.to}</Moment>
                  )}{" "}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Experience;
