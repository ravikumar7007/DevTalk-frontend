import React from "react";
import Moment from "react-moment";

function Education({ education }) {
  return (
    <>
      <h2 className="my-2">education Credentials</h2>
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
          {education.map((edu) => {
            return (
              <tr key={edu.id}>
                <td>{edu.school}</td>
                <td className="hide-sm">{edu.degree}</td>
                <td className="hide-sm">
                  <Moment format="DD/MM/YYYY">{edu.from}</Moment>-
                  {edu.current ? (
                    "Now"
                  ) : (
                    <Moment format="DD/MM/YYYY">{edu.to}</Moment>
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

export default Education;
