import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutsContextProvider } from './context/WorkoutsContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </Provider>
  </React.StrictMode >,
)
