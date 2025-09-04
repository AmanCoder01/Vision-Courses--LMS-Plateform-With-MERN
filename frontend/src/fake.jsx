<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    {/* <Route path='/signup' element={!userData ? <SignUp /> : <Navigate to={"/"} />} /> */}
    <Route path='/profile' element={userData ? <Profile /> : <Navigate to={"/signup"} />} />
    <Route path='/allcourses' element={<AllCouses />} />
    {/* <Route path='/allcourses' element={userData?<AllCouses/>:<Navigate to={"/signup"}/>}/> */}
    <Route path='/viewcourse/:courseId' element={userData ? <ViewCourse /> : <Navigate to={"/signup"} />} />
    <Route path='/editprofile' element={userData ? <EditProfile /> : <Navigate to={"/signup"} />} />
    <Route path='/enrolledcourses' element={userData ? <EnrolledCourse /> : <Navigate to={"/signup"} />} />
    <Route path='/viewlecture/:courseId' element={userData ? <ViewLecture /> : <Navigate to={"/signup"} />} />
    <Route path='/searchwithai' element={userData ? <SearchWithAi /> : <Navigate to={"/signup"} />} />


    <Route path='/dashboard' element={userData?.role === "educator" ? <Dashboard /> : <Navigate to={"/signup"} />} />
    <Route path='/courses' element={userData?.role === "educator" ? <Courses /> : <Navigate to={"/signup"} />} />
    <Route path='/addcourses/:courseId' element={userData?.role === "educator" ? <AddCourses /> : <Navigate to={"/signup"} />} />
    <Route path='/createcourses' element={userData?.role === "educator" ? <CreateCourse /> : <Navigate to={"/signup"} />} />
    <Route path='/createlecture/:courseId' element={userData?.role === "educator" ? <CreateLecture /> : <Navigate to={"/signup"} />} />
    <Route path='/editlecture/:courseId/:lectureId' element={userData?.role === "educator" ? <EditLecture /> : <Navigate to={"/signup"} />} />
    <Route path='/forgotpassword' element={<ForgotPassword />} />
</Routes>