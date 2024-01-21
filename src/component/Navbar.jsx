import { Box, Button, ButtonGroup, Container, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Barbell } from "phosphor-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <Flex minWidth='max-content' alignItems='center' gap='2' backgroundColor={"ButtonShadow"} p={5}>
            <Link to={'/'}>
                <Box p='2' display={"flex"} gap={2}>
                    <Heading size='md'>Workout Buddy</Heading>
                    <Barbell size={32} />
                </Box>
            </Link>
            <Spacer />

            <Button colorScheme='teal'>Log Out</Button>

        </Flex>

    )
}

export default Navbar