import React from "react";
import MenuRegion from "./regions/MenuRegion";
import MenuDept from "./departements/MenuDept";
import MenuARD from "./arrondissements/MenuARD";
import MenuVillage from "./village/MenuVillage";
import UtlisationApi from "./utilisation/UtlisationApi";
import ContenuMenu from "./ContenuMenu";
import Commun from "./commun/Commun";
import Lycee from "./lycee/Lycee";
import Ecole from "./école/Ecole";
import Hopital from "./hopiteaux/Hopital";

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
          <ContenuMenu />
          <UtlisationApi />
          <MenuRegion />
          <MenuDept />
          <MenuARD />
          <Commun />
          <MenuVillage />
          <Hopital />
          <Lycee />
          <Ecole />
        </div>
      </div>
    </div>
  );
}

export default Menu;
