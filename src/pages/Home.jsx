import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import WorkoutDetails from '../component/WorkoutDetails';
import Form from '../component/Form';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { Barbell } from 'phosphor-react';
import CollapsibleForm from '../component/CollapsibleForm';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setWorkout } from '../redux/slices/workoutSlice';

const Home = () => {
    const dispatch = useDispatch();
    const workouts = useSelector((state) => state.workout.workouts);
    console.log("workouts", workouts);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/workout');
                const allWorkouts = response.data;

                if (response.status === 200) {
                    dispatch(setWorkout(allWorkouts));
                }
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, [dispatch]);

    return (

        <>
            <Box
                p={{ base: 3, md: 5 }}
                display={{ base: 'flex', md: 'flex' }}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                w={'100vw'}
                overflowX={'hidden'} // Add this line to hide the X-axis scrollbar
            >
                {/* Left section for displaying workouts */}
                <Box width={{ base: '100%', md: '65%' }} gap={5} m={{ base: 0, md: 5 }}>
                    {workouts && workouts.length > 0 ? (
                        workouts.map((workout) => (
                            <WorkoutDetails key={workout._id} workout={workout} />
                        ))
                    ) : (
                        <Box display="flex" justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            <Barbell size={200} />
                            <Text>No workouts available.</Text>
                        </Box>
                    )}
                </Box>

                {/* Right section for adding new workouts */}
                <Box width={{ base: '100%', md: '30%' }} bg={'white'} borderRadius={10} p={{ base: 3, md: 5 }} maxHeight={'350'}>
                    <Form />
                </Box>
            </Box>
            <CollapsibleForm />
        </>

    );
};

export default Home;


// ---------------------------------------------------------------------------------------------------------------------



// import React, { useEffect } from 'react';
// import { Box, Text } from '@chakra-ui/react';
// import WorkoutDetails from '../component/WorkoutDetails';
// import Form from '../component/Form';
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
// import { Barbell } from 'phosphor-react';
// import CollapsibleForm from '../component/CollapsibleForm';

// const Home = () => {
//     const { workouts, dispatch } = useWorkoutsContext();

//     useEffect(() => {
//         const fetchWorkouts = async () => {
//             const response = await fetch('http://localhost:5000/api/workout');
//             const json = await response.json();

//             if (response.ok) {
//                 dispatch({ type: 'SET_WORKOUTS', payload: json });
//             }
//         };

//         fetchWorkouts();
//     }, [dispatch]);

//     return (
//         // Main container with flex layout
//         <>
//             <Box
//                 p={{ base: 3, md: 5 }}
//                 display={{ base: 'flex', md: 'flex' }}
//                 justifyContent={'space-between'}
//                 flexDirection={{ base: 'column', md: 'row' }}
//                 w={'100vw'}
//                 overflowX={'hidden'} // Add this line to hide the X-axis scrollbar
//             >
//                 {/* Left section for displaying workouts */}
//                 <Box width={{ base: '100%', md: '65%' }} gap={5} m={{ base: 0, md: 5 }}>
//                     {workouts && workouts.length > 0 ? (
//                         workouts.map((workout) => (
//                             <WorkoutDetails key={Math.random()} workout={workout} />
//                         ))
//                     ) : (
//                         <Box display="flex" justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
//                             <Barbell size={200} />
//                             <Text>No workouts available.</Text>
//                         </Box>
//                     )}
//                 </Box>

//                 {/* Right section for adding new workouts */}
//                 <Box width={{ base: '100%', md: '30%' }} bg={'white'} borderRadius={10} p={{ base: 3, md: 5 }} maxHeight={'350'}>
//                     <Form />
//                 </Box>
//             </Box>
//             <CollapsibleForm />
//         </>

//     );
// };

// export default Home;
