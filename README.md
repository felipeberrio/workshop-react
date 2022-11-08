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