import React from 'react'

function MenuDept() {
    const id = "{id}";

  return (
    <div>
    <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
    <div id="départements" className="p-5">
      <h3>Départements</h3>

      <div className="mt-3">
        <h4 id="simple-list-item-3">GET /departements</h4>
        <p>Récupérer la liste de toutes les régions du Sénégal.</p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>https://127.0.0.1:8000/api/departements</span>
        </div>
      </div>
      <div>
        <h6 className="fw-bold" id="simple-list-item-4">GET /departement/{id}</h6>
        <p>
          Récupérer un département spécifique à partir de son
          identifiant.
        </p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>https://127.0.0.1:8000/api/departement/{id}</span>
        </div>
      </div>
      <div>
        <h6 className="fw-bold" id="simple-list-item-5">
          GET /departements/region/{id}
        </h6>
        <p>Récupérer les départements d'une région donnée.</p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>
            https://127.0.0.1:8000/api/departements/region/{id}
          </span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default MenuDept