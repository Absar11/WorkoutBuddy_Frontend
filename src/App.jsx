import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import { useSelector } from 'react-redux'


function App() {

  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  const PrivateWrapper = (isAuthenticated) => {
    return isAuthenticated ? <Home /> : <Navigate to="/login" />;
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box minHeight={"100vh"} minWidth={"100vw"} bg={'#1aac83'} overflowX={"hidden"}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={"/register"} element={<Signup />} />
            <Route path={"/login"} element={<LoginPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
