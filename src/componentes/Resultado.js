import React from "react";
import axios from "axios";

const Resultado = ({ img }) => {
  axios
    .post("http://127.0.0.1:8000/detectar-objeto", img)
    .then((result) => {
      this.guardarData(result);
    })
    .catch((error) => {
      console.log("la cagamos");
    });
  console.log(img);
  return <div>Resultado</div>;
};
export default Resultado;