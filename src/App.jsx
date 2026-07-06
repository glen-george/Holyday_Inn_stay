
import './App.css'
import Admin from './pages/Admin'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import React from "react";

import Footer from './components/Footer'
import {  Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'
import Register from './pages/Register';
import AdminProtectedRoute from "./pages/AdminProtectedRoutes";
import Header from './components/Header'



function App() {

const isLoggedIn = localStorage.getItem("currentUser");
  return (
    <>

      <Header/>
        <Routes>
        
          <Route path="/"  element={<Home/>} />
            <Route path="/login" element={<Login />} />
           <Route path="/hotels"  element={<Hotels/>} />

            <Route path="/booking/:id" element={ localStorage.getItem("currentUser") ? <Booking /> : <Navigate to="/login" />}/>
            
            <Route path="/mybookings"  element={<MyBookings/>} />
             <Route path="/admin"  element={<Admin/>}/>
             <Route path="/admin" element={<AdminProtectedRoute><Admin /></AdminProtectedRoute>
    }
  />

            <Route path="/register" element={<Register />} />
         


      

        </Routes>
    <Footer/>   

    </>
  )
}

export default App
