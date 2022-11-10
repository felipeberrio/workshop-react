import { useState, useEffect } from 'react';
import { HiCalendar } from "react-icons/hi";
import { Box, Heading, Image, Flex, Text, Tag, Spacer } from '@chakra-ui/react'; 
import dayjs from "dayjs";
import "dayjs/locale/es";
import * as API from './services/launches';
import logo from "./assets/logo-spacex.png";

export function App() {
   const [launches, setLaunches] = useState([]);


  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>    
      <Image m={4} src={logo} width={300} />
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex display="flex">
              <Text fontSize="2xl">Mission <strong>{launch.mission_name} </strong>
              ({launch.launch_year})</Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex>
              <HiCalendar /> {" "}
              <Text fontSize="sm" ml={1}>
                {dayjs(launch.launch_date_local)
                  .locale("es")
                  .format("D, MMMM, YYYY")}
                {launch.mission_name} ({launch.launch_year})
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  ); 
}


export default App; 

/* function App() {
  return <div>Hola Mundo</div>
}

export default App; */