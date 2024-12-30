import React, { useState } from 'react';
import mapas from '../images/Majo_Map.png';
const Pista = ({ mapa, respuestaCorrecta, onRespuestaCorrecta, siguientePista }) => {
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [pistaproxima, setPistaProxima] = useState('');

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
      <img src={mapas} alt="Mapa" height={"400px"}></img>
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