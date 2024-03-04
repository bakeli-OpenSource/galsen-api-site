import React from 'react';
import ApiEndpoint from '../réutiiilisable/ApiEndpoint';

function hopital() {
    const id = "{id}";
    const code = "{code}";

    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
                <div id="hopitaux" className="p-5">
                    <h3 className='fw-bold'>Hôpitaux</h3>

                    <ApiEndpoint
                        title="GET /hopitaux"
                        description="Récupérer la liste de tous les hôpitaux du Sénégal."
                        endpoint="https://127.0.0.1:8000/api/hopitaux"
                    />

                    <ApiEndpoint
                        title={`GET /hopitaux/{code}`}
                        description="Récupérer un hôpital spécifique à partir de son code."
                        endpoint={`https://127.0.0.1:8000/api/hopital/${code}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default hopital;
