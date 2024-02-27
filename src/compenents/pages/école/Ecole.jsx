import React from 'react';
import ApiEndpoint from '../réutiiilisable/ApiEndpoint';

function Ecole() {
    const id = "{id}";
    const code = "{code}";

    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
                <div id="ecoles" className="p-5">
                    <h3 className='fw-bold'>Écoles</h3>

                    <ApiEndpoint
                        title="GET /ecoles"
                        description="Récupérer la liste de toutes les écoles du Sénégal."
                        endpoint="https://127.0.0.1:8000/api/ecoles"
                    />

                    <ApiEndpoint
                        title={`GET /ecoles/{code}`}
                        description="Récupérer une école spécifique à partir de son code."
                        endpoint={`https://127.0.0.1:8000/api/ecole/${code}`}
                    />

                    <ApiEndpoint
                        title={`GET /ecoles/{id}/etudiants`}
                        description="Récupérer les écoles d'une commun donné."
                        endpoint={`https://127.0.0.1:8000/api/ecoles/${id}/communes`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Ecole;
