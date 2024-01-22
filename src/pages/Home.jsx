import React, { useEffect, useState } from 'react'
import { Box, Container, StackDivider, Text, VStack } from '@chakra-ui/react'
import WorkoutDetails from '../component/WorkoutDetails';
import Form from '../component/Form';

const Home = () => {

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/api/v1')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])


    return (

        <Box bg={'#1aac83'} p={5} display={"flex"} justifyContent={"space-between"} h={"full"}>
            <Box width={"65%"} gap={5} m={5}>

                {workouts ? (
                    workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </Box>
            <Box width={"30%"} bg={"white"} borderRadius={10} p={5} maxHeight={"350"}>
                <Form />
            </Box>
        </Box>
    )
}

export default Home