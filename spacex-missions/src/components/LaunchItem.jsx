import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Tag, Spacer, Button, Icon } from '@chakra-ui/react'; 
import { Link } from 'react-router-dom'
import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch){
    return (
        <Box bg="gray.100" p={2 } m={4} borderRadius="lg">
                <Flex display="flex">
                  <Text fontSize="2xl">Mission <strong>{launch.mission_name} </strong>
                  ({launch.launch_year})</Text>
                  <Spacer />
                  <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                  </Tag>
                </Flex>
                <Flex align='center'>
                  <Icon as={HiCalendar} color='gray.500' /> {" "}
                  <Text fontSize="sm" ml={1} color='gray.500'>
                    {dayjs(launch.launch_date_local)
                      .locale("es")
                      .format("D, MMMM, YYYY")}
                  </Text>
                </Flex>
                <link to={'/launch/${launch.flight_number}'} />
                <Button mt={2} colorScheme='blue'>
                  More Details
                </Button>
              </Box>
      ); 
}