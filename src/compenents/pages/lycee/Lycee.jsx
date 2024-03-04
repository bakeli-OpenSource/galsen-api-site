import React from 'react';
import ApiEndpoint from "../réutiiilisable/ApiEndpoint";

function Lycee() {
    const code = "{code}";

    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
                <div id="lycees" className="p-5">
                    <h3 className='fw-bold'>Lycées</h3>

                    <ApiEndpoint
                        title="GET /lycees"
                        description="Récupérer la liste de tous les lycées du Sénégal."
                        endpoint="https://127.0.0.1:8000/api/lycees"
                    />

                    <ApiEndpoint
                        title={`GET /lycees/{code}`}
                        description="Récupérer un lycée spécifique à partir de son code."
                        endpoint={`https://127.0.0.1:8000/api/lycee/${code}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Lycee;
