import React, { useState } from 'react';
import { pistas } from './data/pistas';
import Pista from './components/pista';
import mainmap from './images/mainmap.png';
import './App.css';
// import Progreso from './components/Progreso';

const App = () => {
  // Estado para controlar si el juego ha comenzado o no
  const [inicioJuego, setInicioJuego] = useState(false);
  
  // Estado para manejar el progreso de las pistas y cuál pista mostrar
  // const [progreso, setProgreso] = useState(Array(pistas.length).fill(false));
  const [currentPista, setCurrentPista] = useState(0);

  // // Función para manejar cuando se introduce la respuesta correcta
  const handleRespuestaCorrecta = () => {
    setCurrentPista(currentPista + 1);
  };

  // Función para iniciar la búsqueda del tesoro
  const comenzarBusqueda = () => {
    setInicioJuego(true);
  };

  return (
    <div className="container">
    {!inicioJuego ? (
      <div>
        <h1>¡Feliz Cumpleaños, amor!</h1>
        <p>Para recibir tus regalos tendrás que encontrarlos...</p>
        <img src={mainmap} alt="Mapa sin marcas" />
        <button onClick={comenzarBusqueda}>Empieza la búsqueda del tesoro</button>
      </div>
    ) : (
      <div>
        <h1>¡Feliz Cumpleaños!</h1>
        {currentPista < pistas.length ? (
          <Pista
            id={pistas[currentPista].id}
            respuestaCorrecta={pistas[currentPista].respuesta}
            onRespuestaCorrecta={handleRespuestaCorrecta}
          />
        ) : (
          <h2>¡Has completado la búsqueda del tesoro!</h2>
        )}
      </div>
    )}
  </div>
  );
};

export default App;
