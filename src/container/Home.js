import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("./resultado", { imagen });
  };
  return (
    <body>
      <h2>Detectar Objeto</h2>

      <form
        /*onSubmit={(e) => {
          e.preventDefault();

          setImg(new FormData(e.target));
          console.log(img);
          navigate("./resultado", { img });
        }}*/
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="img1"
          onChange={(e) => {
            const el = e.target;
            el.type === "file" ? setImagen(el.files[0]) : setImagen(el.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </body>
  );
}
