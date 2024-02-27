import React from "react";
import ApiEndpoint from "../réutiiilisable/ApiEndpoint";

function MenuDept() {
  const id = "{id}";
  const code = "{code}";

  return (
    <div>
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div id="départements" className="p-5">
          <h3 className='fw-bold'>Départements</h3>

          {/* Utilisation du composant réutilisable */}
          <ApiEndpoint
            title="GET /departements"
            description="Récupérer la liste de tous les départements du Sénégal."
            endpoint="https://127.0.0.1:8000/api/departements"
          />

          <ApiEndpoint
            title={`GET /departements/${code}`}
            description="Récupérer un département spécifique à partir de son code."
            endpoint={`https://127.0.0.1:8000/api/departements/${code}`}
          />

          <ApiEndpoint
            title={`GET /departements/${id}/arrondissements`}
            description="Récupérer l'ensemble des arrondissements d'un département."
            endpoint={`https://127.0.0.1:8000/api/departements/${id}/arrondissements`}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuDept;
