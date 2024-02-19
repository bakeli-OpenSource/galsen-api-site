import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function Menu() {
  const id = "{id}";
  const code = "{code}";
  return (
    <div>
      <div className="card ">
        <Container fluid className="content">
          <div className="row position-relative ">
            <div className="col-2 overflow-y-auto sidebar">
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
                    ABOUT THIS PROJECT <br />
                    <a
                      href="#info"
                      className="text-black fw-bolder"
                      style={{ textDecoration: "none" }}
                    >
                      Important Information
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
                    CONTRIBUTING{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                  >
                    FIELDS{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                  >
                    API ENDPOINTS
                    <br />
                    <a
                      href="#info"
                      className="fw-bolder"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px' }}
                    >
                      Using this Project
                    </a>
                  </Nav.Link>
                  <Nav.Link
                    className="LinkNav"
                    href="#pricing"
                    style={{ color: "#9090AA" }}
                  >
                    ENDPOINTS
                    <br />
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-1"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', }}
                    >
                      Toutes regions
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-2"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Region à partir de l'id
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-3"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Tous départements
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-4"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Département à partir de l'id
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-5"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px',paddingTop: '10px', }}
                    >
                      Les departements d'une region
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-6"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Tous les arrondissements
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-7"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Arrondissement par id
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-8"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px',}}
                    >
                      Tous les arrondissements d'un départements
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-9"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Trouver un local à partir de son code
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-10"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Tous les villages
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-11"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Village par id
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-12"
                      style={{ textDecoration: "none", color: "#2BADAD", fontSize: 
                    '11px', paddingTop: '10px', }}
                    >
                      Tous les villages d'un arrondissement
                    </a>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
            <div className="col-10 TextMenu">
              <div
                data-bs-spy="scroll"
                data-bs-target="#simple-list-example"
                data-bs-offset="0"
                data-bs-smooth-scroll="true"
                className="scrollspy-example"
                tabindex="0"
              >
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                  <div className="p-5">
                  <h4 className="">
                    Documentation de l'API pour les Données Géographiques du
                    Sénégal
                  </h4>
                  <p className="">
                    Bienvenue dans la documentation de l'API pour les données
                    géographiques du Sénégal. Cette API fournit des
                    fonctionnalités permettant de récupérer des informations sur
                    les régions, départements et arrondissements du Sénégal.
                  </p>
                  </div>
                </div>
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
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
                <div className="p-3" style={{borderBottom: "solid 1px #dfe2e7",}}>
                  <h3 className="text-center">Endpoints Disponibles</h3>
                </div>
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                <div id="regions" className="p-5">
                  <h3>Régions</h3>

                  <div className="mt-3">
                    <h6 className="fw-bold"  id="simple-list-item-1">GET /regions</h6>
                    <p>Récupérer la liste de toutes les régions du Sénégal.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/regions</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold" id="simple-list-item-2">GET /region/{id}</h6>
                    <p>
                      Récupérer une région spécifique à partir de son
                      identifiant.
                    </p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/region/{id}</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                <div id="départements" className="p-5">
                  <h3>Départements</h3>

                  <div className="mt-3">
                    <h4 id="simple-list-item-3">GET /departements</h4>
                    <p>Récupérer la liste de toutes les régions du Sénégal.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/departements</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold"  id="simple-list-item-4">GET /departement/{id}</h6>
                    <p>
                      Récupérer un département spécifique à partir de son
                      identifiant.
                    </p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/departement/{id}</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold"  id="simple-list-item-5">
                      GET /departements/region/{id}
                    </h6>
                    <p>Récupérer les départements d'une région donnée.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>
                        https://127.0.0.1:8000/api/departements/region/{id}
                      </span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                <div id="arrondissements" className="p-5">
                  <h3>Arrondissements</h3>

                  <div className="mt-3">
                    <h6 className="fw-bold"  id="simple-list-item-6">GET /arrondissements</h6>
                    <p>
                      Récupérer la liste de tous les arrondissements du Sénégal.
                    </p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/arrondissements</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold"  id="simple-list-item-7">GET /arrondissement/{id}</h6>
                    <p>
                      Récupérer un arrondissement spécifique à partir de son
                      identifiant.
                    </p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>
                        https://127.0.0.1:8000/api/arrondissement/{id}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold"  id="simple-list-item-8">GET /arrondissements</h6>
                    <p>Récupérer les arrondissements d'un département donné.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/arrondissements</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                <div id="villages" className="p-5">
                  <h3>Villages</h3>

                  <div className="mt-3">
                    <h6 className="fw-bold"  id="simple-list-item-10">GET /villages</h6>
                    <p>Récupérer la liste de tous les villages du Sénégal.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/villages</span>
                    </div>
                  </div>
                  <div>
                    <h4 id="simple-list-item-11">GET /village/{id}</h4>
                    <p>
                      Récupérer un village spécifique à partir de son
                      identifiant.
                    </p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/village/{id}</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold"  id="simple-list-item-12">GET /villages</h6>
                    <p>Récupérer les arrondissements d'un département donné.</p>
                    <div
                      className="p-3 mb-4 mt-0 w-75"
                      style={{
                        backgroundColor: "#f3f6fb",
                        border: "1px solid #dadde3",
                      }}
                    >
                      <span>https://127.0.0.1:8000/api/villages</span>
                    </div>
                  </div>
                  <br />
                </div>
                </div>

                <br />
                <br />
                <div className="" style={{borderBottom: "solid 1px #dfe2e7",}}>
                <div className="p-5">
                  <h6 className="fw-bold"  id="simple-list-item-9">GET location/{code}</h6>
                  <p>Récupérer une localisation à partir de son code.</p>
                  <div
                    className="p-3 mb-4 mt-0 w-75"
                    style={{
                      backgroundColor: "#f3f6fb",
                      border: "1px solid #dadde3",
                    }}
                  >
                    <span>https://127.0.0.1:8000/api/location/{code}</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Menu;
