import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// // import './App.css'
import * as API from './services/launches';

function App() {
// Para crear el hook vamos a crear una constante que con useState devuelve un array(puede ser cualquier cosa, string, objetos, etc) con dos elementos (primero es el elemento con el estado en si, que es laucnhes y el potro es una funcion que permite cambiatr el estado) de inicio va a estar vacio
  const [launches, setLaunches] = useState([]);

// Como hay componentes que van cambiando de estado constantemente vamos a usar useEffect mejor  para no liarla es mejor usar .then porque no puedo usarlo como asyncronam y usar el await... para usar async y await me creo una funcion afuera y ahi si la puedo usar dentro pero es mas completo

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  // Al acabar la promesa tendremos los datos y los pasamos al set como argumento nos lo ahorramos
  // Tambien al usar useEffect, ademas de recibir el callback como primer argumento, recibe un array de dependencias de segundo argumento, si esta vacia va a ejecutra la llamada a la api, y si no esta vacia por ejemplo [launches] lo que va a hacer es llamar la funcion de adentro al cambiar la variable,

  // Dentro de corchetes puedes hacer logica de javascript donde queremos que launches el array lo iteremos y escriba algo y con react necesitamos que reaccione y nos devuelva cosa, por lo tanto vamos a recorrer el array y que nos devuelva el array, con for no funciona, toca usar map o otro elemento funcional de javascript que devunelva algo vamos a hacer que nos devuelva dentro de un listado pero para un listado necesitamos que cada fila tenga un key por elemento así como pusimos para que sea unico el valor
  

  return (
  <>    
    <h1>SpaceX Launches</h1>
    <section>
    <ul>
       {launches.map(launch => (
      <li key={}></li>
    ))} 
    </section>
    </ul>
  </>
  )
}

export default App



     /*{ <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  ) }*/