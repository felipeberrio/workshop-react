import { Image } from '@chakra-ui/react'; 
import { Routes, Route, Link } from 'react-router-dom';

import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import logo from "./assets/logo-spacex.png";

export function App() {
  return (
    <>    
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element = { <LaunchList /> } />
        <Route path="launch/:launchId" element = { <LaunchDetails /> } />
      </Routes>
    </>
  ); 
}

export default App; 


/* function App() {
  return <div>Hola Mundo</div>
}

export default App; */