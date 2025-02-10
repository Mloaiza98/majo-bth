import React, { useState } from "react";
import map1 from "../images/1.png";
import map2 from "../images/2.png";
import map3 from "../images/3.png";
import map4 from "../images/4.png";
// import map5 from '../images/5.png';
const mapas = [map1, map2, map3, map4];


const Pista = ({
  id,
  respuestaCorrecta,
  onRespuestaCorrecta,
  siguientePista,
}) => {
  const [respuesta, setRespuesta] = useState("");
  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setRespuesta("");
      onRespuestaCorrecta();

      // setPistaProxima(siguientePista);
    } else {
      setRespuesta("");
    }
  };

  return (
    <div>
      <img src={mapas[id - 1]} alt="Mapa" height={"400px"}></img>
      <input
        type="numeric"
        value={respuesta}
        onChange={handleInputChange}
        placeholder="Introduce codigo"
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        ¿Ya encontraste el regalo?
      </button>
    </div>
  );
};

export default Pista;
