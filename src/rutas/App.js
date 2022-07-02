import React from "react";
import "../App.css";
//import Formulario from "../componentes/Formulario";
//import Home from "./Home/Home";
import Home from "../container/Home.js";
//import Layout from "../componentes/Layout";
import Resultado from "../container/Resultado";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/resultado" element={<Resultado />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
