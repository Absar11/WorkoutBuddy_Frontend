import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createWorkout } from '../redux/slices/workoutSlice';



const Form = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);

    const toast = useToast();



    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, weight, reps };

        try {
            const response = await axios.post('http://localhost:5000/api/workout', workout, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response in form : ', response);
            const data = response.data;
            console.log('Data in form : ', data);

            if (response.status !== 200) {
                // Showing an error toast
                toast({
                    title: 'Error',
                    description: data.error || 'Failed to add Workout',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }

            if (response.status === 200) {
                toast({
                    title: 'Success',
                    description: 'Workout Added Successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                setTitle('');
                setWeight('');
                setReps('');

                // Uncomment this line if you want to dispatch an action
                dispatch(createWorkout(data));
            }
        } catch (error) {
            console.error('Error adding workout:', error);
            // Handle the error as needed
        }
    };



    return (
        <Box spacing={4} gap={4} color={"#1aac83"}>
            <Heading size="lg" justifyContent="center" alignItems={"center"}>
                Add Workout
            </Heading>
            <form onSubmit={handleSubmit} gap={3}>
                <FormControl key="title">
                    <FormLabel>Title</FormLabel>
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl key="weight">
                    <FormLabel>Weight (in kg) : </FormLabel>
                    <Input
                        type="Number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl key="reps">
                    <FormLabel>Reps</FormLabel>
                    <Input
                        type="Number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
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





// -------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext';



// const Form = () => {
//     const { dispatch } = useWorkoutsContext();

//     const [title, setTitle] = useState('');
//     const [weight, setWeight] = useState(0);
//     const [reps, setReps] = useState(0);

//     const toast = useToast();



//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const workout = { title, weight, reps }; // spread formData to create a copy

//         const response = await fetch('http://localhost:5000/api/workout', {
//             method: 'POST',
//             body: JSON.stringify(workout),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         const json = await response.json();

//         if (!response.ok) {
//             //showing an error toast
//             toast({
//                 title: "Error",
//                 description: json.error || 'Failed to add Workout',
//                 status: 'error',
//                 duration: 5000,
//                 isClosable: true
//             })
//         }
//         if (response.ok) {
//             toast({
//                 title: 'Success',
//                 description: "Workout Added Successfully",
//                 status: 'success',
//                 duration: 5000,
//                 isClosable: true
//             })

//             setTitle('')
//             setWeight('')
//             setReps('')

//             dispatch({ type: 'CREATE_WORKOUT', payload: json })
//         }
//     };


//     return (
//         <Box spacing={4} gap={4} color={"#1aac83"}>
//             <Heading size="lg" justifyContent="center" alignItems={"center"}>
//                 Add Workout
//             </Heading>
//             <form onSubmit={handleSubmit} gap={3}>
//                 <FormControl key="title">
//                     <FormLabel>Title</FormLabel>
//                     <Input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </FormControl>
//                 <FormControl key="weight">
//                     <FormLabel>Weight (in kg) : </FormLabel>
//                     <Input
//                         type="Number"
//                         value={weight}
//                         onChange={(e) => setWeight(e.target.value)}
//                         required
//                     />
//                 </FormControl>
//                 <FormControl key="reps">
//                     <FormLabel>Reps</FormLabel>
//                     <Input
//                         type="Number"
//                         value={reps}
//                         onChange={(e) => setReps(e.target.value)}
//                         required
//                     />
//                 </FormControl>

//                 <Button type="submit" bg="#1aac83" color="white" w="full" mt={5}>
//                     Add Workout
//                 </Button>
//             </form>
//         </Box>
//     );
// };

// export default Form;
