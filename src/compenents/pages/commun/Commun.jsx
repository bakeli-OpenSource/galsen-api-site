import React from 'react'

function Commun() {
    const id = "{id}";
    const code = "{code}";

    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7" }}>
                <div id="communes" className="p-5">
                    <h3 className='fw-bold'>Communes</h3>

                    <div className="mt-3">
                        <h6 className="fw-bold" id="simple-list-item-7">
                            GET /communes
                        </h6>
                        <p>Récupérer la liste de toutes les communes du Sénégal.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/communes</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="fw-bold" id="simple-list-item-8">
                            GET /communes/{code}
                        </h6>
                        <p>Récupérer une commune spécifique à partir de son code.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/commune/{code}</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="fw-bold" id="simple-list-item-9">
                            GET /communes/{id}/villages
                        </h6>
                        <p>Récupérer les villages d'une commune donnée.</p>
                        <div
                            className="p-3 mb-4 mt-0 w-75"
                            style={{
                                backgroundColor: "#f3f6fb",
                                border: "1px solid #dadde3",
                            }}
                        >
                            <span>https://127.0.0.1:8000/api/communes/{id}/villages</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Commun;
