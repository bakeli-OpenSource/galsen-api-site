import React from "react";
import ApiEndpoint from "../réutiiilisable/ApiEndpoint";

function MenuARD() {
  const id = "{id}";
  const code = "{code}";
  const codeComm = "{codeComm}";

  return (
    <div>
      <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
        <div id="arrondissements" className="p-5">
          <h3 className='fw-bold'>Arrondissements</h3>

          <ApiEndpoint
            title="GET /arrondissements"
            description="Récupérer la liste de tous les arrondissements du Sénégal."
            endpoint="https://127.0.0.1:8000/api/arrondissements"
          />

          <ApiEndpoint
            title={`GET /arrondissements/${code}`}
            description="Récupérer un arrondissement spécifique à partir de son code."
            endpoint={`https://127.0.0.1:8000/api/arrondissement/${code}`}
          />

          <ApiEndpoint
            title={`GET /arrondissements/${codeComm}`}
            description="Récupérer les communes d'un arrondissement donné."
            endpoint={`https://127.0.0.1:8000/api/arrondissements/${codeComm}/communes`}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuARD;
