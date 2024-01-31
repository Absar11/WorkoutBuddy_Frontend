import { Box, Button, ButtonGroup, Container, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Barbell } from "phosphor-react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from "../redux/slices/authSlice"

const Navbar = () => {
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async () => {

        dispatch(logIn({ isLoggedIn: false, token: "", user_id: "" }));
        navigate('/login');
        localStorage.removeItem('authToken');
    }

    return (

        <Flex minWidth='max-content' alignItems='center' backgroundColor={"ButtonShadow"} p={5}>
            <Link to={'/'}>
                <Box p='2' display={"flex"} gap={2}>
                    <Heading size='md'>Workout Buddy</Heading>
                    <Barbell size={32} />
                </Box>
            </Link>
            <Spacer />

            {isAuthenticated &&
                <Link to='/login'>
                    <Button colorScheme='teal' onClick={handleClick}>Log Out</Button>
                </Link>
            }

        </Flex>

    )
}

export default Navbar   