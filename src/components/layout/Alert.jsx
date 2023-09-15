import React from "react";

import { useSelector } from "react-redux";

function Alert() {
  const renderAlert = useSelector((state) => state.alert);

  return (
    <div className="alert-wrapper">
      {renderAlert.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
}
export default Alert;
