// SignupPage.js
import React, { useState } from 'react';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    VStack,
    Heading,
    Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

const SignupPage = () => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/user/signup", {
                userName,
                email,
                password
            })

            navigate('/login');
            setLoading(false);
            console.log("data : ", response.data);
            console.log('Signup details:', { userName, email, password });
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data && error.response.data.message) {
                // Log the specific error message from the backend
                console.log("Backend error message:", error.response.data.message);
            } else {
                console.log("Error during login:", error.message);
            }
        }
    };

    return (
        <Box p={4}>
            <VStack spacing={4} align="stretch" maxW="md" mx="auto">
                <Heading as="h1" size="xl">
                    Signup
                </Heading>
                <Text fontSize="lg" color="gray.500">
                    Create an account to get started.
                </Text>

                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>

                <Button colorScheme="teal" onClick={handleSignup}>
                    Signup
                </Button>

                <Text fontSize="md" color="gray.500">
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: 'teal' }}>
                        Login
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default SignupPage;
