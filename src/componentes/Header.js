import React from "react";
import { Link } from "react-router-dom";
import logo from "../statics/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <>
      <nav>
        <div>
          <Link to="/" href="#">
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="margen30"
            ></img>
          </Link>
        </div>
        <p className="centrar margen30">CLASIFICADOR RNA</p>
      </nav>
    </>
  );
}
