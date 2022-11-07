# workshop-react

React es una libreraria para hacer interfaces de usuario
### Creando aplicación en react desde vite y node js

Para comenzar con la configuración del proyecto, vamos a utilizar un "empaquetador" en este caso Vite y node para realizar la configuración y conexión de backend y frontend.
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
6. Para ejecutar nuestra aplicación podemos escribir npm run dev como uno de nuestros scripts