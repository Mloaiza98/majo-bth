import React, { useState } from 'react';
import map1 from '../images/1.png';
import map2 from '../images/2.png';
import map3 from '../images/3.png';
import map4 from '../images/4.png';
// import map5 from '../images/5.png';
const mapas = [map1, map2, map3, map4 ]
   

console.log(mapas[0]);
const Pista = ({ id, respuestaCorrecta, onRespuestaCorrecta, siguientePista }) => {
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [Check, setCheck] = useState(null);
  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setMensaje('Esoooo chiquitica! ');
      setCheck(true);
      setRespuesta('');
      // setPistaProxima(siguientePista);
    } else {
      setMensaje('Mehh, intenta de nuevo');
      setRespuesta('');
    }
  };
  const handleSubmitNext = (e) => {
    onRespuestaCorrecta();
      setMensaje('');
      setCheck(null);
  };

  return (
    <div>
      <img src={mapas[id-1]} alt="Mapa" height={"400px"}></img>
      <form onSubmit={handleSubmit}>
        <input type="numeric" value={respuesta} onChange={handleInputChange} onSubmit={handleSubmit}/>
        {/* <button type="submit"></button> */}
      </form>
      {mensaje && <p>{mensaje}</p>}
      {Check && 
      <div> 
      <button type="submit" onClick={handleSubmitNext}>¿Ya encontraste el regalo?</button>
      </div>}
    </div>
  );
};

export default Pista;