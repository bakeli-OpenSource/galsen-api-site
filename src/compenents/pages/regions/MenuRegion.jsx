import React from "react";

function MenuRegion() {
  const id = "{id}";
  const code = "{code}";
  return (
    <div>
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div id="regions" className="p-5">
          <h3>Régions</h3>

          <div className="mt-3">
            <h6 className="fw-bold" id="simple-list-item-1">
              GET /regions
            </h6>
            <p>Récupérer la liste de toutes les régions du Sénégal.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>https://127.0.0.1:8000/api/regions</span>
            </div>
          </div>
          <div>
            <h6 className="fw-bold" id="simple-list-item-2">
              GET /regions/{code}
            </h6>
            <p>Récupérer une région spécifique à partir de son code.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>https://127.0.0.1:8000/api/regions/{code}</span>
            </div>
          </div>
          <div>
            <h6 className="fw-bold" id="simple-list-item-2">
              GET /regions/{id}/departements
            </h6>
            <p>Récupérer l'ensemble des départements d'une région.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>https://127.0.0.1:8000/api/regions/{id}/departements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuRegion;
