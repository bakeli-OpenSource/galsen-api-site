import React from "react";
import { Nav } from "react-bootstrap";

function Sidebar() {
    return (
        <div
            id="simple-list-example"
            className="d-flex flex-column gap-2 simple-list-example-scrollspy"
        >
            <Nav className="flex-column test mt-4">
                <Nav.Link
                    className="LinkNav"
                    href="#home"
                    style={{ color: "#9090AA" }}
                >
                    GALSEN API <span className="fontPE">PE</span>
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#features"
                    style={{ color: "#9090AA" }}
                >

                <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-01"
                        style={{ textDecoration: "none", color: "#9090AA", paddingTop: '10px' }}
                    >
                     À PROPOS DE CE PROJET <br />
                    </a>

                    
                    <a
                        href="#simple-list-item-01"
                        className="text-black fw-bolder"
                        style={{ textDecoration: "none" }}
                    >
                        Informations importantes
                    </a>
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                >
                    GALSEN API{" "}
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                >
                    CONTRIBUTIONS{" "}
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                >
                    DOMAINES{" "}
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                >
                    POINTS D'ACCÈS DE L'API
                    <br />
                    <a
                        href="#info"
                        className="fw-bolder"
                        style={{ textDecoration: "none", color: "#2BADAD", fontSize: '11px' }}
                    >
                        Utiliser ce projet
                    </a>
                </Nav.Link>
                <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                >
                    POINTS D'ACCÈS
                    <br />
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-1"
                        style={{ textDecoration: "none", color: "#2BADAD", fontSize: '11px' }}
                    >
                        Toutes regions
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-2"
                        style={{ textDecoration: "none", color: "#2BADAD", fontSize: '11px', paddingTop: '10px' }}
                    >
                        Region à partir de l'id
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-3"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Tous départements
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-4"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Département à partir de l'id
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-5"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Les departements d'une region
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-6"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Tous les arrondissements
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-7"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Arrondissement par id
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-8"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Tous les arrondissements d'un départements
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-9"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Trouver un local à partir de son code
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-10"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Tous les villages
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-11"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Village par id
                    </a>
                    <a
                        className="p-1 rounded fw-bolder d-flex"
                        href="#simple-list-item-12"
                        style={{
                            textDecoration: "none", color: "#2BADAD", fontSize:
                                '11px', paddingTop: '10px',
                        }}
                    >
                        Tous les villages d'un arrondissement
                    </a>
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
