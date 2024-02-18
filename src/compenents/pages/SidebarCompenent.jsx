import React from "react";
import { Nav } from "react-bootstrap";

const SidebarCompenent = () => {
  return (
    <div>
      <Nav className="flex-column test">
        <Nav.Link className="LinkNav" href="#home" style={{ color: "#9090AA" }}>
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
            href="#info"
            className="fw-bolder"
            style={{ textDecoration: "none", color: "#2BADAD" }}
          >
            Using this Project
          </a>
          <br />
          <a
            href="#info"
            className="fw-bolder"
            style={{ textDecoration: "none", color: "#2BADAD" }}
          >
            Using this Project
          </a>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SidebarCompenent;
