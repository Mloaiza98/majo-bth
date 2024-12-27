import React, { useState } from 'react';

const Pista = ({ pregunta, respuestaCorrecta, onRespuestaCorrecta }) => {
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setMensaje('Esoooo chiquitica! ');
      onRespuestaCorrecta();
    } else {
      setMensaje('Mehh, intenta de nuevo');
    }
  };

  return (
    <div>
      <h3>{pregunta}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={respuesta} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Pista;