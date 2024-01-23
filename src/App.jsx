import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Box, ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minHeight={"100vh"} minWidth={"100vw"} bg={'#1aac83'} overflowX={"hidden"}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
