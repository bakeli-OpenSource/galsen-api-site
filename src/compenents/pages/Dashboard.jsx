import React from "react";
import NavbarCompenent from "./NavbarCompenent";
import Home from "./Home";
// import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div className="">
      <div className="w-100  col-lg-12 navbarCollapsed">
        <NavbarCompenent />
      </div>

      <div className="row g-0">
        <div className="col-12 ">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
