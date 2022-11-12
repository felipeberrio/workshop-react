import { Image } from '@chakra-ui/react'; 
import { Routes, Route, Link } from 'react-router-dom';

import { LaunchItem } from "./components/LaunchItem";
import logo from "./assets/logo-spacex.png";

export function App() {
  return (
    <>    
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element = { <LaunchesList /> } />
        <Route path="launch/:id" element = { <LaunchItem /> } />
      </Routes>
    </>
  ); 
}


export default App; 

/* function App() {
  return <div>Hola Mundo</div>
}

export default App; */