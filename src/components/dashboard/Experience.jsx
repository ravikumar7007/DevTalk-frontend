import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

function Experience({ experience, deleteExperience}) {
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
              <tr key={exp._id}>
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
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteExperience(exp._id);
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
  deleteExperience: (id) => dispatch(deleteExperience(id)),
});
export default connect(null, mapDispatchtoProps)(Experience);
