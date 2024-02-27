import React from 'react'

function lycee() {
    const id = "{id}";
    const code = "{code}";

    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
                <div id="lycees" className="p-5">
                    <h3 className='fw-bold'>Lycées</h3>

                    <div className="mt-3">
                        <h6 className="fw-bold" id="simple-list-item-7">
                            GET /lycees
                        </h6>
                        <p>Récupérer la liste de tous les lycées du Sénégal.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/lycees</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="fw-bold" id="simple-list-item-8">
                            GET /lycees/{code}
                        </h6>
                        <p>Récupérer un lycée spécifique à partir de son code.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/lycee/{code}</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="fw-bold" id="simple-list-item-9">
                            GET /lycees/{id}/etudiants
                        </h6>
                        <p>Récupérer les étudiants d'un lycée donné.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/lycees/{id}/etudiants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default lycee