import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function Menu() {
  const id = "{id}";
  return (
    <div>
      <div className="card p-5">
        <Container fluid className="content">
          <div className="row">
            <div className="col-4">
              <div
                id="simple-list-example"
                className="d-flex flex-column gap-2 simple-list-example-scrollspy"
              >
                <Nav className="flex-column test">
                  <Nav.Link
                    className="LinkNav"
                    href="#home"
                    style={{ color: "#9090AA" }}
                  >
                    REST CONTRIES <span className="fontPE">PE</span>
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
                    REST CONTRIES{" "}
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
                      style={{ textDecoration: "none", color: "#2BADAD" }}
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
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /regions
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-2"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /region/{id}
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-3"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /departements
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-4"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /departement/{id}
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-5"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /departements/region/{id}
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-6"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /arrondissement
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-7"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /arrondissement/{id}
                    </a>
                    <a
                      className="p-1 rounded fw-bolder d-flex"
                      href="#simple-list-item-8"
                      style={{ textDecoration: "none", color: "#2BADAD" }}
                    >
                      GET /arrondissements
                    </a>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
            <div className="col-8">
              <div
                data-bs-spy="scroll"
                data-bs-target="#simple-list-example"
                data-bs-offset="0"
                data-bs-smooth-scroll="true"
                className="scrollspy-example"
                tabindex="0"
              >
                <div className="">
                  <h2 className="text-uppercase fs-2">
                    Documentation de l'API pour les Données Géographiques du
                    Sénégal
                  </h2>
                  <p className="fs-5">
                    Bienvenue dans la documentation de l'API pour les données
                    géographiques du Sénégal. Cette API fournit des
                    fonctionnalités permettant de récupérer des informations sur
                    les régions, départements et arrondissements du Sénégal.
                  </p>
                  <hr />
                </div>
                <div className="d-flex">
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
                <hr />
                <div>
                  <h2 className="text-center">Endpoints Disponibles</h2>
                </div>
                <div id="regions" className="mt-5">
                  <h3>Régions</h3>

                  <div className="mt-3">
                    <h4 id="simple-list-item-1">GET /regions</h4>
                    <p>Récupérer la liste de toutes les régions du Sénégal.</p>
                  </div>
                  <div>
                    <h4 id="simple-list-item-2">GET /region/{id}</h4>
                    <p>
                      Récupérer une région spécifique à partir de son
                      identifiant.
                    </p>
                  </div>
                </div>
                <div id="départements" className="mt-5">
                  <h3>Départements</h3>

                  <div className="mt-3">
                    <h4 id="simple-list-item-3">GET /departements</h4>
                    <p>Récupérer la liste de toutes les régions du Sénégal.</p>
                  </div>
                  <div>
                    <h4 id="simple-list-item-4">GET /departement/{id}</h4>
                    <p>
                      Récupérer un département spécifique à partir de son
                      identifiant.
                    </p>
                  </div>
                  <div>
                    <h4 id="simple-list-item-5">
                      GET /departements/region/{id}
                    </h4>
                    <p>Récupérer les départements d'une région donnée.</p>
                  </div>
                </div>
                <div id="arrondissements" className="mt-5">
                  <h3>Arrondissements</h3>

                  <div className="mt-3">
                    <h4 id="simple-list-item-6">GET /arrondissement</h4>
                    <p>
                      Récupérer la liste de tous les arrondissements du Sénégal.
                    </p>
                  </div>
                  <div>
                    <h4 id="simple-list-item-7">GET /arrondissement/{id}</h4>
                    <p>
                      Récupérer un arrondissement spécifique à partir de son
                      identifiant.
                    </p>
                  </div>
                  <div>
                    <h4 id="simple-list-item-8">GET /arrondissements</h4>
                    <p>Récupérer les arrondissements d'un département donné.</p>
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
