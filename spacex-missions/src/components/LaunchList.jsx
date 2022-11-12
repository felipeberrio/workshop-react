import { useState, useEffect } from 'react';


const [launches, setLaunches] = useState([]);


   useEffect(() => {
     API.getAllLaunches().then(setLaunches);
   }, []);


<Heading align="center" as="h1" size="lg" m={4}>
SpaceX Launches
</Heading>
<section>
{launches.map((launch) => (
  <LaunchItem key={launch.flight_number} {...launch}/>
))}
</section>