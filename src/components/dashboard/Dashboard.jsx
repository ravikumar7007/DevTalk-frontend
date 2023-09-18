import React from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

function Dashboard({getCurrentProfile}) {
  getCurrentProfile()
  return <div className="container">Dashboard</div>;
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getCurrentProfile:()=>dispatch(getCurrentProfile())
  }
}

export default connect(null,mapDispatchToProps)(Dashboard);
