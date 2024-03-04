import React from 'react';
import ApiEndpoint from "../réutiiilisable/ApiEndpoint";

function Commun() {
    const id = "{id}";
    const code = "{code}";

    return (
      <div>
        <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
          <div id="communes" className="p-5">
            <h3 className="fw-bold">Communes</h3>
            <ApiEndpoint
              title="GET /communes"
              description="Récupérer la liste de toutes les communes du Sénégal."
              endpoint="https://127.0.0.1:8000/api/communes"
            />
            <ApiEndpoint
              title={`GET /communes/${code}`}
              description="Récupérer une commune spécifique à partir de son code."
              endpoint={`https://127.0.0.1:8000/api/commune/${code}`}
            />
            <ApiEndpoint
              title={`GET /communes/${code}/villages`}
              description="Récupérer les villages d'une commune donnée."
              endpoint={`https://127.0.0.1:8000/api/communes/${codeCom}/villages`}
            />{" "}
            <ApiEndpoint
              title={`GET /communes/${code}/ecoles`}
              description="Récupérer les écoles d'une commune donnée."
              endpoint={`https://127.0.0.1:8000/api/communes/${codeCom}/ecoles`}
            />{" "}
            <ApiEndpoint
              title={`GET /communes/${code}/lycees`}
              description="Récupérer les lycées d'une commune donnée."
              endpoint={`https://127.0.0.1:8000/api/communes/${codeCom}/lycees`}
            />{" "}
            <ApiEndpoint
              title={`GET /communes/${code}/hopitaux`}
              description="Récupérer les hopitaux d'une commune donnée."
              endpoint={`https://127.0.0.1:8000/api/communes/${codeCom}/hopitaux`}
            />
          </div>
        </div>
      </div>
    );
}

export default Commun;
