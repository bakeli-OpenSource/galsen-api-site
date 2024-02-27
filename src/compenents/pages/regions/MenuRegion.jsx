import React from "react";
import ApiEndpoint from "../réutiiilisable/ApiEndpoint";

function MenuRegion() {
  const id = "{id}";
  const code = "{code}";

  return (
    <div>
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div id="regions" className="p-5">
          <h3 className='fw-bold'>Régions</h3>

          <ApiEndpoint
            title="GET /regions"
            description="Récupérer la liste de toutes les régions du Sénégal."
            endpoint="https://127.0.0.1:8000/api/regions"
          />

          <ApiEndpoint
            title={`GET /regions/${code}`}
            description="Récupérer une région spécifique à partir de son code."
            endpoint={`https://127.0.0.1:8000/api/regions/${code}`}
          />

          <ApiEndpoint
            title={`GET /regions/${id}/departements`}
            description="Récupérer l'ensemble des départements d'une région."
            endpoint={`https://127.0.0.1:8000/api/regions/${id}/departements`}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuRegion;
