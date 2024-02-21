import React from 'react'

function MenuVillage() {
    const id = "{id}";
    
  return (
    <div>
    <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
    <div id="villages" className="p-5">
      <h3>Villages</h3>

      <div className="mt-3">
        <h6 className="fw-bold" id="simple-list-item-10">GET /villages</h6>
        <p>Récupérer la liste de tous les villages du Sénégal.</p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>https://127.0.0.1:8000/api/villages</span>
        </div>
      </div>
      <div>
        <h4 id="simple-list-item-11">GET /village/{id}</h4>
        <p>
          Récupérer un village spécifique à partir de son
          identifiant.
        </p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>https://127.0.0.1:8000/api/village/{id}</span>
        </div>
      </div>
      <div>
        <h6 className="fw-bold" id="simple-list-item-12">GET /villages</h6>
        <p>Récupérer les arrondissements d'un département donné.</p>
        <div
          className="p-3 mb-4 mt-0 w-75"
          style={{
            backgroundColor: "#f3f6fb",
            border: "1px solid #dadde3",
          }}
        >
          <span>https://127.0.0.1:8000/api/villages</span>
        </div>
      </div>
      <br />
    </div>
  </div>
    </div>
  )
}

export default MenuVillage