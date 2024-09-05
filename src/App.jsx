import { Children, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContext } from './authContext'
import ProjectRoutes from './Router'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  const [currentUser,setCurrentUser]=useState(null);
  useEffect(()=>{
   // const userId=LocalStroage.getItem('userId');
    const userId = localStorage.getItem('userId');
    if(userId){
      setCurrentUser(userId);
    }
  },[]);

  return (
    <>
    <AuthContext.Provider value={{currentUser,setCurrentUser}}>
      <Router>
      <ProjectRoutes/>
      </Router>
    </AuthContext.Provider>
      
    </>
  )
}

export default App
