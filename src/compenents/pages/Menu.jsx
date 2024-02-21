import React from "react";
import MenuRegion from "./regions/MenuRegion";
import MenuDept from "./departements/MenuDept";
import MenuARD from "./arrondissements/MenuARD";
import MenuVillage from "./village/MenuVillage";
import Localisation from "./Localisation/Localisation";
import UtlisationApi from "./utilisation/UtlisationApi";

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
            <div className="p-5" id="simple-list-item-02">
              <h4>Informations Importantes</h4>
              <p>L'architecture de Galsen API par catégories suit désormais la structure ci-dessous :</p>
              <p>
                - name <br />
                - code_vill <br />
                - superficie_km2 <br />
                - population_masculine <br />
                - population_feminine <br />
                - population <br />
                - taux_scolarisation_globale <br />
                - incidence_pauvrete <br />
                - taux_alphabetisation_general <br />
                - taux_enregistrement_etat_civil <br />
              </p>
              <p>Veuillez prendre en compte ces changements lors de l'utilisation de l'API.</p>
            </div>
          </div>

          <UtlisationApi />
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
