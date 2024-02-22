import React from "react";

function Localisation() {
  const code = "{code}";

  return (
    <div>
      <br />
      <br />
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div className="p-5">
          <h6 className="fw-bold" id="simple-list-item-12">
            GET location/{code}
          </h6>
          <p>Récupérer une localisation à partir de son code.</p>
          <div
            className="p-3 mb-4 mt-0 w-75"
            style={{
              backgroundColor: "#f3f6fb",
              border: "1px solid #dadde3",
            }}
          >
            <span>https://127.0.0.1:8000/api/location/{code}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Localisation;
