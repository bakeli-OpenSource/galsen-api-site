import React from 'react'

function UtlisationApi() {
    return (
        <div>
            <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <div className="d-flex p-5">
                    <h4>
                        Utilisation de l'API
                        <br />
                        <br />
                        Base URL
                        <br />
                        <span className="fw-normal mt-2 fs-5">
                            https://127.0.0.1:8000/api
                        </span>
                    </h4>
                </div>
            </div>

            <div className="p-3" style={{ borderBottom: "solid 1px #dfe2e7", }}>
                <h3 className="text-center">Endpoints Disponibles</h3>
            </div>
        </div>
    )
}

export default UtlisationApi