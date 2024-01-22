import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { WorkoutsContextProvider } from './context/WorkoutsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>,
)
