import React from 'react'
import { Box, Button, Divider, Heading, StackDivider, Text, VStack } from '@chakra-ui/react'
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaRepeat } from "react-icons/fa6";
import { Trash } from "phosphor-react";

const WorkoutDetails = ({ workout }) => {
    return (
        <Box shadow='lg' bg={"white"} borderRadius={"20"} p={5} gap={4} mb={5} color={"#007c56"} display={'flex'} justifyContent={'space-between'}>
            <Box>
                <Heading >{workout.title}</Heading>
                <Divider />
                <Box display={"flex"} alignItems={"center"} color='#1aac83' gap={2}>
                    <Text fontSize='2xl'> <strong>Weight :</strong> {workout.weight} </Text>
                    <GiWeightLiftingUp size={25} />
                </Box>
                <Divider />
                <Box display={"flex"} alignItems={"center"} color='#1aac83' gap={2}>
                    <Text fontSize='2xl'> <strong>Reps :</strong> {workout.reps} </Text>
                    <FaRepeat size={20} />
                </Box>
                <Divider />
                <Box display={"flex"} alignItems={"center"} color='#1aac83' gap={2}>
                    <Text fontSize='xl'> {workout.createdAt} </Text>
                </Box>
            </Box>
            <Button>
                <Trash size={30} color='#1aac83' />
            </Button>


        </Box>
    )
}

export default WorkoutDetails