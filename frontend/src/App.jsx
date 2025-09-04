import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './pages/ForgotPassword'
import getCurrentUser from './customHooks/getCurrentUser'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Dashboard from './pages/admin/Dashboard'
import Courses from './pages/admin/Courses'
import AllCouses from './pages/AllCouses'
import AddCourses from './pages/admin/AddCourses'
import CreateCourse from './pages/admin/CreateCourse'
import CreateLecture from './pages/admin/CreateLecture'
import EditLecture from './pages/admin/EditLecture'

import getCouseData from './customHooks/getCouseData'
import ViewCourse from './pages/ViewCourse'
import ScrollToTop from './components/ScrollToTop'
import getCreatorCourseData from './customHooks/getCreatorCourseData'
import EnrolledCourse from './pages/EnrolledCourse'
import ViewLecture from './pages/ViewLecture'
import SearchWithAi from './pages/SearchWithAi'
import getAllReviews from './customHooks/getAllReviews'
import PrivateRoute from './components/PrivateRoute'

export const serverUrl = "http://localhost:8000"

function App() {

  let { userData } = useSelector(state => state.user)

  getCurrentUser()
  getCouseData()
  getCreatorCourseData()
  getAllReviews()
  return (
    <>

      {/* <ToastContainer /> */}
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Protected routes (any logged-in user) */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path="/allcourses" element={<AllCouses />} />
          <Route path="/viewcourse/:courseId" element={<ViewCourse />} />
          <Route path="/enrolledcourses" element={<EnrolledCourse />} />
          <Route path="/viewlecture/:courseId" element={<ViewLecture />} />
          <Route path="/searchwithai" element={<SearchWithAi />} />
        </Route>

        {/* Protected routes (only educators) */}
        <Route element={<PrivateRoute allowedRoles={["educator"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/addcourses/:courseId" element={<AddCourses />} />
          <Route path="/createcourses" element={<CreateCourse />} />
          <Route path="/createlecture/:courseId" element={<CreateLecture />} />
          <Route path="/editlecture/:courseId/:lectureId" element={<EditLecture />} />
        </Route>
      </Routes>

    </>

  )
}

export default App
