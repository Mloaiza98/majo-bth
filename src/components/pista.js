import React, { useState } from 'react';
import map1 from '../images/1.jpeg';
import map2 from '../images/2.jpeg';
import map3 from '../images/3.jpeg';
import map4 from '../images/4.jpeg';
import map5 from '../images/5.jpeg';
const mapas = [map1, map2, map3, map4, map5 ]
   

console.log(mapas[0]);
const Pista = ({ id, respuestaCorrecta, onRespuestaCorrecta, siguientePista }) => {
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [pistaproxima, setPistaProxima] = useState('');
  console.log(id);
  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setMensaje('Esoooo chiquitica! ');
      // onRespuestaCorrecta();
      setRespuesta('');
      setPistaProxima(siguientePista);
    } else {
      setMensaje('Mehh, intenta de nuevo');
      setRespuesta('');
    }
  };
  const handleSubmitNext = (e) => {
    onRespuestaCorrecta();
      setMensaje('');
      setPistaProxima(null);
  };

  return (
    <div>
      <img src={mapas[id]} alt="Mapa" height={"400px"}></img>
      <form onSubmit={handleSubmit}>
        <input type="text" value={respuesta} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      {pistaproxima && 
      <div> 
      <p>{pistaproxima}</p> 
      <button type="submit" onClick={handleSubmitNext}>¿Ya encontraste el regalo?</button>
      </div>}
    </div>
  );
};

export default Pista;