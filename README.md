# workshop-react

React es una libreraria para hacer interfaces de usuario, puedes hacer aplicaicón con javascript, pero para acceder al DOM se hace más facil así (html, head y body), se usa en todas las apps de hoy en dia como facebook, netflix, instagram, etc

JSX. forma que tiene react para escribir en html pero que realmente es código javascript, pero si fuera 100% javascript sería más tedioso de realizar.
Babel ya casi no se usa pero se sigue usando, antes para usar react tocaba instalar webpack y las librerias de babel que traduce código que no entiende en javascript lo pasa código que si que entiende por sintaxis

### Crear aplicación en react desde vite y node js

Para comenzar con la configuración del proyecto, ya no vamos a utilizar un "empaquetador" como webpack ya que casi no se usa ya, sino herramientas de "scafolding" o create react app y ya se configura apartir de agí en este caso Vite y node para realizar la configuración y conexión de backend y frontend.
1. Ingresamos a https://vitejs.dev/guide/ - ingresamos a get started, ahi tenemos todas las opciones de proyectos que podemos crear, en este caso react con javascript
2. Como vamos a instalar con npm vamos a Scaffolding Your First Vite Project - With NPM: npm create vite@latest
3. Lo configuramos con un nombre, spacex-missions, con react y javascript
4. Nos creó varios documentos:
    vite.config.js: la configuración de nuestro proyecto junto con su documentación - como el webpack config
    package.json: es como el manifiesto de una aplicación en node - no es el punto de entrada de la app sino donde esta la info de la app; lo mas importante a tener en cuenta son los SCRIPTS que son los comandos que vamos a poder ejecutar desde la terminal:
          "scripts": {
    "dev": "vite", // Nos permite correr la app en modo desarrollo
    "build": "vite build", // Nos permite empaquetar la app de cara a producción por el código javascript y demás
    "preview": "vite preview"
  },
  "dependencies": { // Array de librerias que se van a ir instalando por el momento solo esta react
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": { //Dependencias de desarrollo como son vite y que vas a usar de local
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@vitejs/plugin-react": "^2.2.0",
    "vite": "^3.2.3"
  }
5.Para este proyecto vamos a introducir todo en un solo HTML que sera el creado index.html, es algo malo por la carga de contenido, para que la indexe google, que la rastreen los buscadores, que los navegadores lo rendericen más rapido no es lo más aconsejable - se hace con una api rest y single page aplication. - en este div estara todo nuestro contenido
     <div id="root"></div>
6. Antes de ejecutarlo vamos a instalar nuestra app con: npm install
7. Para ejecutar nuestra aplicación podemos escribir npm run dev como uno de nuestros scripts
8. Vamos a eliminar Quitamos los estilos El archivo css y el return de app.jsx, en este caso lo comente, y vamos a escribir en el lenguaje unico de react en jsx tipo html de javascript:<div>Hola Mundo</div>
9. Main.jsx es el punto de entrada de la app q es lo primero que va a leer ya que en html lo declaramos así     <script type="module" src="/src/main.jsx"></script> el main.jsx va a importar react para que entienda jsx y todas las librerias de react básicas, react dom para la logia propia de componentes react de renderizado en desarrollo web para poder separarlo de react native que funciona para un dispositivo movil y el app de un modulo:
    ReactDOM.createRoot(document.getElementById('root')).render( // Primero crea un root con variable de id del root ( nodo del documento donde queremos incrustarlo) y la segunda renderiza 1 argumento,  que es la app creada en Modo react estricto
      <React.StrictMode>
        <App /> // el app lo importamos de un modulo tambien
      </React.StrictMode>
    )
10. pasamos a ver app.jsx, un componente de react realmente es una función que además de exportarse por defecto, se puede exportar nombrada, para que al importar lo puedas importar import { App } from "./App"; para asegurarse de importate con el mismo nombre de antes y mas componentes si lo separa con comas { App } from "./App,x,x";
11. Podemos descargar para chrome react dev tools como extensión para poder ver en consola 2 elementos nuevos (para ver los componentes que estan hechos en javascript y su arbol y propiedades)
12. Vamos a utilizar los datos de la api de spacex https://docs.spacexdata.com/ proveninetes de un gran .json
13. Creamos un fichero en src llamado /services y luego Creamos un archivo llamado launches.js donde vamos a hacer una función que me devuelva los datos del json de nuestra api por lo que haremos una petición Get a la URL y que nos devuelva los datos, podemos usar librerias para fetchin como axio o demás pero fetch es nativa y asi nos ahorramos pues una linea más de codigo que tampoco importa mucho.
14. Primero vamos a importar la api en una constante la cual nos devolvera el json de nuestra url desde este archivo laucnhes
const API_URL = "https://api.spacexdata.com/v3/launches"; // Creamos una constante con el valor del json de la url

export async function getAllLaunches() {
    try{
    const response = await fetch('${API_URL}/launches'); // Cuando hacemos el await fetch obtenemos una respuesta y los datos pasan al json donde el array de internet con todos los objetos
    const data = await response.json;
    return data;
    }   catch (error) {
    console.error(error);
    }
}

export async function getLaunchByFlightNumber(flightNumber) {
    try{
    const response = await fetch('${API_URL}/launches/${flightNumber}'); 
    const data = await response.json;
    return data;
    }   catch (error) {
    console.error(error);
    }
}
15.Vamos ahora a importar las funciones que acabamos de hacer en app.jsx así : import * as API from './services/launches'; asi poder usar API.getAllLaunches
Para poder guardar la información cuando nos llegue y aca tenemos un problema con la sincronidad de javascript con react tenemos que guardar la información en un estado para que si un estado cambia que fuerce el renderizado y nos muestre la información, por el momento en app.jsx solo devolvemos un hola mundo y lo saca facil pero al renderizar el nuevo json va a tardar un rato, tenemos que tener en cuenta cuanto tarda en llegarnos los datos y cuanto se demora en cargar los datos en pantalla, con metodos de ciclos de vida, por lo que si el componente usa estado toca usar funciónes pero con hook nuevos el ciclo de vida permite hacer cambios en determinados momentos con useState como hook de estado y useEffect que dependiendo como lo declare hace referencia al componentingMount y componentingMount como hook cuando actualiza y estan en la libreria de react estos hooks o ganchos.
16. importamos react useState y useEffect en app.jsx: import { useState, useEffect } from 'react' 
17. en una funcion para poner una constante la debemos poner de primeras y con hooks toca tener en cuenta unas reglas, no poner hooks en renderizado, oprque como es javascript creerias que se puede pero no dentro de la función, tiene que estar de primeras al crear el componente - Dado que react lo que hace es crear un elemento react.createElement y de ahi se crean los demas elementos, tendremos un primer objetos padre de todos pero solo 1 no pueden haber dos a su altura, para eso podemos usar Fragment por si usas flexblox o demás elementos que causaba problema esta caracterista de rect y es tan simple como solo poner: es como un div invible primero que no afecta los estilos
function App() {

  return (
  <>    
    <div>Hola Mundo</div>
    <div>PIPE</div>
  </>
  )
}
18. // Para crear el hook vamos a crear una constante que con useState devuelve un array(puede ser cualquier cosa, string, objetos, etc) con dos elementos (primero es el elemento con el estado en si, que es laucnhes y el potro es una funcion que permite cambiatr el estado) de inicio va a estar vacio
  const [launches, setLaunches] = useState([]);

// Como hay componentes que van cambiando de estado constantemente vamos a usar useEffect mejor  para no liarla es mejor usar .then porque no puedo usarlo como asyncronam y usar el await... para usar async y await me creo una funcion afuera y ahi si la puedo usar dentro pero es mas completo

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  // Al acabar la promesa tendremos los datos y los pasamos al set como argumento nos lo ahorramos
  // Tambien al usar useEffect, ademas de recibir el callback como primer argumento, recibe un array de dependencias de segundo argumento, si esta vacia va a ejecutra la llamada a la api, y si no esta vacia por ejemplo [launches] lo que va a hacer es llamar la funcion de adentro al cambiar la variable,
19. Modificamos el app.jsx 

import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// // import './App.css'
import * as API from './services/launches';

// Si quisieramos exportar las demas variables ne la funcion podemos hacerlo con ...props que sirve para hacer un resumen del resto de propiedades REST PARAMETERS
// export function App({ key, onkeyChange , ...props}) {


export function App() {
// Para crear el hook vamos a crear una constante que con useState devuelve un array(puede ser cualquier cosa, string, objetos, etc) con dos elementos (primero es el elemento con el estado en si, que es laucnhes y el potro es una funcion que permite cambiatr el estado) de inicio va a estar vacio
  const [launches, setLaunches] = useState([]);

// Como hay componentes que van cambiando de estado constantemente vamos a usar useEffect mejor  para no liarla es mejor usar .then porque no puedo usarlo como asyncronam y usar el await... para usar async y await me creo una funcion afuera y ahi si la puedo usar dentro pero es mas completo

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  // Al acabar la promesa tendremos los datos y los pasamos al set como argumento nos lo ahorramos
  // Tambien al usar useEffect, ademas de recibir el callback como primer argumento, recibe un array de dependencias de segundo argumento, si esta vacia va a ejecutra la llamada a la api, y si no esta vacia por ejemplo [launches] lo que va a hacer es llamar la funcion de adentro al cambiar la variable,

  // Dentro de corchetes puedes hacer logica de javascript donde queremos que launches el array lo iteremos y escriba algo y con react necesitamos que reaccione y nos devuelva cosa, por lo tanto vamos a recorrer el array y que nos devuelva el array, con for no funciona, toca usar map o otro elemento funcional de javascript que devunelva algo vamos a hacer que nos devuelva dentro de un listado pero para un listado necesitamos que cada fila tenga un key por elemento así como pusimos para que sea unico el valor
  


import { useState, useEffect } from 'react';
import * as API from './services/launches';
import logo from "./assets/logo-spacex.png";


export function App() {
   const [launches, setLaunches] = useState([]);


  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>    
      <img m={4} src={logo} width={300} />
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </li>
        ))}
      </ul>
    </>
  ); 
}


export default App; // Esta ultima linea esta rara, porque de por si ya estoy exportando la función al invocarla, pero no me esta apareciendo si no la invoco aca al final


20. Vamos a relacionar un logo, lo guardamos en assets nueva carpeta dentro de source y lo invocamos en nuestra app en app.jsx dentro de lo que va a devolver el app

      <img m={4} src={logo} width={300} />

### Estilos con Chackra-ui

1. Vamos a importar componentes y con las props vamos a estilarlos https://chakra-ui.com/ 
buscamos por ejemplo Heading para el encabezado, importarlo y así... hay muchos componentes en chackra

Para usarlo vamos a getting started y vamos a Vite en este caso particular del proyecto, ya para los demas dice como instalar:
toca en la terminal usar: npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 donde se instala chacke, emotion de react, framer-motion

Ademas agregaremos un proveedor dentro de nuestro main.jsx que es un componente que engloba la app

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render( 
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

Aplicamos en el app.jsx todas las etiquetas importadas de chackra

### Iconos con React Icons

Vamos a buscar la libreria de React React icons en el link https://react-icons.github.io/react-icons/

Para instalarla usamos npm install @react-icons/all-files --save

1:02:45 sin crasheo