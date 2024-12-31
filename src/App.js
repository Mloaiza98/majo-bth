import React, { useState } from 'react';
import { pistas } from './data/pistas';
import Pista from './components/pista';
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
    <div>
      {/* Pantalla inicial de bienvenida */}
      {!inicioJuego ? (
        <div className="bienvenida">
          <h1>¡Feliz Cumpleaños, amor!</h1>
          <p>Pero lastimosamente, para recibir tus regalos tendrás que encontrarlos...</p>
          <button onClick={comenzarBusqueda}>Empieza la búsqueda del tesoro</button>
        </div>
      ) : (
        // Pantalla del juego
        <div>
          <h1>¡Feliz Cumpleaños!</h1>
          {currentPista < pistas.length ? (
            <Pista
              id={pistas[currentPista].id}
              respuestaCorrecta={pistas[currentPista].respuesta}
              onRespuestaCorrecta={handleRespuestaCorrecta}
              siguientePista={pistas[currentPista].pista}
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
