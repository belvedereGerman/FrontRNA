import "../App.css";
import Home from "../container/Home - clase.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
