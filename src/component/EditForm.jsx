// EditForm.js
import React, { useState } from 'react';
import { Input, Button, Stack } from '@chakra-ui/react';

const EditForm = ({ workout, onEdit, onClose }) => {
    const [updatedWorkout, setUpdatedWorkout] = useState({ ...workout });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedWorkout((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = () => {
        // Call the onEdit function with the updated workout data
        onEdit(updatedWorkout);
        // Close the edit form
        onClose();
    };

    return (
        <Stack spacing={4}>
            <Input
                type="text"
                name="title"
                value={updatedWorkout.title}
                onChange={handleInputChange}
                placeholder="Workout Title"
            />
            <Input
                type="number"
                name="weight"
                value={updatedWorkout.weight}
                onChange={handleInputChange}
                placeholder="Weight (in kg)"
            />
            <Input
                type="number"
                name="reps"
                value={updatedWorkout.reps}
                onChange={handleInputChange}
                placeholder="Reps"
            />
            {/* Add more input fields if needed */}
            <Button colorScheme="blue" onClick={handleEditSubmit}>
                Save Changes
            </Button>
        </Stack>
    );
};

export default EditForm;
