import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

function Education({ education, deleteEducation }) {
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
              <tr key={edu._id}>
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
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteEducation(edu._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
const mapDispatchtoProps = (dispatch) => ({
  deleteEducation: (id) => dispatch(deleteEducation(id)),
});

export default connect(null, mapDispatchtoProps)(Education);
