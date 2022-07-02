import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Formulario() {
  const [resultado, setResultado] = useState([]);

  let traerResultado = async (e) => {
    e.preventDefault();

    const bodyFormData = new FormData(e.target);
    const res = await axios.post(
      "http://127.0.0.1:8000/detectar-objeto",
      bodyFormData
    );
    setResultado(res);
    console.log(res);
  };

  useEffect(() => {
    traerResultado();
  }, []);

  return (
    <body>
      <h2>Detectar Objeto</h2>
      <form onSubmit={(e) => traerResultado(e)} encType="multipart/form-data">
        <input type="file" name="img1" />
        <button type="submit">Submit</button>
        <p>{resultado}</p>
      </form>
    </body>
  );
}
