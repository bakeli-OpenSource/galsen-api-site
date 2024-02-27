import React from "react";

function ApiEndpoint({ title, description, endpoint }) {
  return (
    <div className="mt-3">
      <h6 className="fw-bold">{title}</h6>
      <p>{description}</p>
      <div
        className="p-3 mb-4 mt-0 w-75"
        style={{
          backgroundColor: "#f3f6fb",
          border: "1px solid #dadde3",
        }}
      >
        <span>{endpoint}</span>
      </div>
    </div>
  );
}

export default ApiEndpoint;
