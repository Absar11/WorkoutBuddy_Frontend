import React from 'react'
import { Box, Button, Divider, Heading, StackDivider, Text, VStack, useToast } from '@chakra-ui/react'
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaRepeat } from "react-icons/fa6";
import { Trash } from "phosphor-react";

const WorkoutDetails = ({ workout }) => {

    const toast = useToast();

    const handleDelete = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/v1/${workout._id}", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                const json = await response.json();
                console.log(json.error || "Failed to delete workout");

                toast({
                    title: 'Error',
                    description: json.error || 'Failed to delete workout',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                // If the delete request is successful, call the onDelete callback
                onDelete(workout._id);

                // Show a success toast
                toast({
                    title: 'Success',
                    description: 'Workout deleted successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Error during delete request:', error);

            // Show a generic error toast
            toast({
                title: 'Error',
                description: 'An error occurred. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

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
                <Trash onClick={handleDelete} size={30} color='#1aac83' />
            </Button>


        </Box>
    )
}

export default WorkoutDetails