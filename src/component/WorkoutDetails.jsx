import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    Heading,
    Text,
    useToast,
} from "@chakra-ui/react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaRepeat } from "react-icons/fa6";
import { Trash } from "phosphor-react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { FaEdit } from "react-icons/fa";
import EditForm from "./EditForm";
import { useDispatch } from "react-redux";
import { deleteWorkout, editWorkout } from "../redux/slices/workoutSlice";
import axios from "axios";

const WorkoutDetails = ({ workout }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleEdit = async (updatedWorkout) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/workout/${workout._id}`,
                updatedWorkout,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                // Update the state only if the update request is successful
                dispatch(editWorkout(updatedWorkout));

                // Show a success toast
                toast({
                    title: 'Workout Updated successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                // Handle errors, show error toast or perform other actions
                console.error('Failed to update workout:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating workout:', error.message);
        }
    };



    const handleEditOpen = () => {
        setIsEditOpen(true);
    };

    const handleEditClose = () => {
        setIsEditOpen(false);
    };


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/workout/${workout._id}`);

            if (response.status === 200) {
                dispatch(deleteWorkout(workout._id));

                // Show a success toast
                toast({
                    title: 'Workout deleted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                // Handle errors, show error toast or perform other actions
                console.error('Failed to delete workout:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting workout:', error.message);
        }
    };


    return (
        <Box
            shadow="lg"
            bg="white"
            borderRadius="20"
            p={5}
            gap={4}
            mb={5}
            color="#007c56"
            display="flex"
            justifyContent="space-between"
            overflowX="hidden" // Added overflowX property
        >
            <Box flex="1">
                <Heading>{workout.title}</Heading>
                <Divider />
                <Box display="flex" alignItems="center" gap={2}>
                    <Text fontSize="2xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                        <strong>Weight :</strong> {workout.weight}
                    </Text>
                    <GiWeightLiftingUp size={25} />
                </Box>
                <Divider />
                <Box display="flex" alignItems="center" gap={2}>
                    <Text fontSize="2xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                        <strong>Reps :</strong> {workout.reps}
                    </Text>
                    <FaRepeat size={20} />
                </Box>
                <Divider />
                <Box display="flex" alignItems="center" color="#1aac83" gap={2}>
                    <Text fontSize="xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                        {formatDistanceToNow(new Date(workout.createdAt), {
                            addSuffix: true,
                        })}
                    </Text>
                </Box>
            </Box>

            <Box gap={2}>
                <Button>
                    <Trash onClick={handleDelete} size={25} color="#1aac83" />
                </Button>

                <Button onClick={handleEditOpen} color="#1aac83">
                    <FaEdit size={20} />
                </Button>
                {/* Render the EditForm conditionally */}
                {isEditOpen && (
                    <EditForm workout={workout} onEdit={handleEdit} onClose={handleEditClose} />
                )}
            </Box>

        </Box>
    );
};

export default WorkoutDetails;









// ------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import {
//     Box,
//     Button,
//     Divider,
//     Heading,
//     StackDivider,
//     Text,
//     VStack,
//     useToast,
// } from "@chakra-ui/react";
// import { GiWeightLiftingUp } from "react-icons/gi";
// import { FaRepeat } from "react-icons/fa6";
// import { Trash } from "phosphor-react";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import { FaEdit } from "react-icons/fa";
// import EditForm from "./EditForm";

// const WorkoutDetails = ({ workout }) => {
//     const { dispatch } = useWorkoutsContext();
//     const toast = useToast();

//     const [isEditOpen, setIsEditOpen] = useState(false);

//     const handleEdit = async (updatedWorkout) => {
//         try {
//             const response = await fetch(
//                 `http://localhost:5000/api/workout/${workout._id}`,
//                 {
//                     method: "PATCH",
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(updatedWorkout),
//                 }
//             );

//             if (response.ok) {
//                 // Update the state only if the update request is successful
//                 dispatch({ type: 'EDIT_WORKOUT', payload: updatedWorkout });

//                 // Show a success toast
//                 toast({
//                     title: "Workout Updated successfully",
//                     status: "success",
//                     duration: 3000,
//                     isClosable: true,
//                 });
//             } else {
//                 // Handle errors, show error toast or perform other actions
//                 console.error("Failed to update workout:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error updating workout:", error.message);
//         }
//     };


//     const handleEditOpen = () => {
//         setIsEditOpen(true);
//     };

//     const handleEditClose = () => {
//         setIsEditOpen(false);
//     };

//     const handleDelete = async () => {
//         try {
//             const response = await fetch(
//                 `http://localhost:5000/api/workout/${workout._id}`,
//                 {
//                     method: "DELETE",
//                 }
//             );
//             // console.log("workout_id", workout._id)

//             if (response.ok) {
//                 // Update the state only if the delete request is successful
//                 dispatch({ type: "DELETE_WORKOUT", payload: workout._id });

//                 // Show a success toast
//                 toast({
//                     title: "Workout deleted successfully",
//                     status: "success",
//                     duration: 3000,
//                     isClosable: true,
//                 });
//             } else {
//                 // Handle errors, show error toast or perform other actions
//                 console.error("Failed to delete workout:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error deleting workout:", error.message);
//         }
//     };

//     return (
//         <Box
//             shadow="lg"
//             bg="white"
//             borderRadius="20"
//             p={5}
//             gap={4}
//             mb={5}
//             color="#007c56"
//             display="flex"
//             justifyContent="space-between"
//             overflowX="hidden" // Added overflowX property
//         >
//             <Box flex="1">
//                 <Heading>{workout.title}</Heading>
//                 <Divider />
//                 <Box display="flex" alignItems="center" gap={2}>
//                     <Text fontSize="2xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
//                         <strong>Weight :</strong> {workout.weight}
//                     </Text>
//                     <GiWeightLiftingUp size={25} />
//                 </Box>
//                 <Divider />
//                 <Box display="flex" alignItems="center" gap={2}>
//                     <Text fontSize="2xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
//                         <strong>Reps :</strong> {workout.reps}
//                     </Text>
//                     <FaRepeat size={20} />
//                 </Box>
//                 <Divider />
//                 <Box display="flex" alignItems="center" color="#1aac83" gap={2}>
//                     <Text fontSize="xl" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
//                         {formatDistanceToNow(new Date(workout.createdAt), {
//                             addSuffix: true,
//                         })}
//                     </Text>
//                 </Box>
//             </Box>

//             <Box gap={2}>
//                 <Button>
//                     <Trash onClick={handleDelete} size={25} color="#1aac83" />
//                 </Button>

//                 <Button onClick={handleEditOpen} color="#1aac83">
//                     <FaEdit size={20} />
//                 </Button>
//                 {/* Render the EditForm conditionally */}
//                 {isEditOpen && (
//                     <EditForm workout={workout} onEdit={handleEdit} onClose={handleEditClose} />
//                 )}
//             </Box>

//         </Box>
//     );
// };

// export default WorkoutDetails;
