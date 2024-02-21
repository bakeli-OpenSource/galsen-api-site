import React from "react";

function MenuARD() {
  const id = "{id}";
  const code = "{code}";

  return (
    <div>
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div id="arrondissements" className="p-5">
          <h3>Arrondissements</h3>

          <div className="mt-3">
            <h6 className="fw-bold" id="simple-list-item-7">
              GET /arrondissements
            </h6>
            <p>Récupérer la liste de tous les arrondissements du Sénégal.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>https://127.0.0.1:8000/api/arrondissements</span>
            </div>
          </div>
          <div>
            <h6 className="fw-bold" id="simple-list-item-8">
              GET /arrondissements/{code}
            </h6>
            <p>Récupérer un arrondissement spécifique à partir de son code.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>https://127.0.0.1:8000/api/arrondissement/{code}</span>
            </div>
          </div>
          <div>
            <h6 className="fw-bold" id="simple-list-item-9">
              GET /arrondissements
            </h6>
            <p>Récupérer les villages d'un arrondissement donné.</p>
            <div
              className="p-3 mb-4 mt-0 w-75"
              style={{
                backgroundColor: "#f3f6fb",
                border: "1px solid #dadde3",
              }}
            >
              <span>
                https://127.0.0.1:8000/api/arrondissements/{id}/villages
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuARD;
