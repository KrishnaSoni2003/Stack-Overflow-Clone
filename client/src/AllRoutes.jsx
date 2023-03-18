// import { Switch } from '@mui/material'
import React from 'react'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
// import QuestionDetails from './pages/Questions/QuestionDetails'
// import {Routes,Route} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Subscription from './Subscription/Subscription'
import Connect from './pages/Connect/Connect'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>} />
        <Route path='/Questions' element={<Questions/>} />
        <Route path='/AskQuestion' element={<AskQuestion/>} />
        <Route path='/Questions/:id' element={<DisplayQuestion/>} />
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
        <Route path='/Subscription' element={<Subscription/>}/>
        <Route path='/Connect' element={<Connect/>}/>

    </Routes>
  )
}

export default AllRoutes
