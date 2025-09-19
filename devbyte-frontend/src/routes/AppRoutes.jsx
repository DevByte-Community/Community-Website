import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login.jsx'
import Signup from '@/pages/auth/Signup.jsx'
import CommunityGuidelines from '../pages/CommunityGuidelines.jsx';
import App from '@/App.jsx'
import About from '@/pages/About.jsx';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="login" element= {<Login/>}/> 
      <Route path="signup" element= {<Signup/>}/> 
      <Route path="communityGuidelines" element= {<CommunityGuidelines/>}/>
      <Route path="About" element ={<About/>} />
    </Routes>
  )
}

// This is an optional place holder script