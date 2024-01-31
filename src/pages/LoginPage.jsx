// LoginPage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
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
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from "../redux/slices/authSlice"


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/user/login", {
                email,
                password,
            })

            const { token, user_id } = response.data;

            dispatch(logIn({ isLoggedIn: true, token, user_id }));
            navigate('/');
            localStorage.setItem('authToken', token);
            setLoading(false);
            console.log("data : ", response.data);

        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data && error.response.data.message) {
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
                    Login
                </Heading>
                <Text fontSize="lg" color="white" >
                    Welcome back! Please login to your account.
                </Text>

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

                <Button bg="#FFFFFF" w="full" onClick={handleLogin}>
                    Login
                </Button>

                <Text fontSize="md" color="gray.500">
                    Don't have an account?{' '}
                    <Text as="span" color="teal.500">
                        <Link to="/register">Sign up</Link>
                    </Text>
                </Text>
            </VStack>
        </Box>
    );
};

export default LoginPage;
