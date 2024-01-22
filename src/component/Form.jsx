import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        title: '',
        weight: '',
        reps: '',
    });

    const toast = useToast();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform the database update or API call here using formData
        const workout = { ...formData }; // spread formData to create a copy

        try {
            const response = await fetch('http://localhost:5000/api/v1', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();

            if (!response.ok) {
                //showing an error toast
                toast({
                    title: "Error",
                    description: json.error || 'Failed to add Workout',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                })
            } else {
                // showing succes toast
                toast({
                    title: 'Success',
                    description: "Workout Added Successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                })
                console.log(json);
            }

            // Reset the form data state if needed
            setFormData({
                title: '',
                weight: '',
                reps: '',
            });
        } catch (error) {
            toast({
                title: "Error",
                description: 'An error occured please try again',
                status: 'error',
                duration: 5000,
                isClosable: true
            })
            console.error('Error during fetch:', error);
        }
    };


    return (
        <Box spacing={4}>
            <Heading size="lg" justifyContent="center">
                Add Workout
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Weight (in kg) : </FormLabel>
                    <Input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Reps</FormLabel>
                    <Input
                        type="text"
                        name="reps"
                        value={formData.reps}
                        onChange={handleChange}
                        required
                    />
                </FormControl>

                <Button type="submit" bg="#1aac83" color="white" w="full" mt={5}>
                    Add Workout
                </Button>
            </form>
        </Box>
    );
};

export default Form;
