import React from "react";
import MenuRegion from "./regions/MenuRegion";
import MenuDept from "./departements/MenuDept";
import MenuARD from "./arrondissements/MenuARD";
import MenuVillage from "./village/MenuVillage";
import Localisation from "./Localisation/Localisation";

function Menu() {
  return (
    <div>
      <div className="card border-0">
        <div
          data-bs-spy="scroll"
          data-bs-target="#simple-list-example"
          data-bs-offset="0"
          data-bs-smooth-scroll="true"
          className="scrollspy-example"
          tabindex="0"
        >
          <div className="" style={{ borderBottom: "solid 1px #dfe2e7", }}>
            <div className="p-5" id="simple-list-item-01">
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
          <MenuRegion />
          <MenuDept />
          <MenuARD />
          <MenuVillage />
          <Localisation />
        </div>
      </div>
    </div>
  );
}

export default Menu;
