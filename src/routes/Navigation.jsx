import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import From from '../assignments/day1/pages/From'
import Layout from '../layout/Layout'
import StudentProfile from '../assignments/day1/pages/StudentProfile'
import LayoutOne from '../assignments/day1/layoutday1/LayoutOne'
import LayoutTwo from '../assignments/day2/layouttwo/LayoutTwo'
import Lobby from '../assignments/day2/pages/Lobby'
import About from '../assignments/day2/pages/About'
import Contact from '../assignments/day2/pages/Contact'
import LayoutThree from '../assignments/day3/layoutThree/LayoutThree'
import Employee from '../assignments/day3/pages/Employee'
import Products from '../assignments/day3/pages/Products'
import Student from '../assignments/day3/pages/Student'
import User from '../assignments/day3/pages/User'
import LayoutThreeA from '../assignments/day3A/layoutThreeA/LayoutThreeA'
import StudCardUI from '../assignments/day3A/pages/StudCardUI'
import Management from '../assignments/day3A/pages/Management'
import Couse from '../assignments/day3A/pages/Couse'
import ClassComponent from '../assignments/day4/pages/ClassComponent'
import Counter from '../assignments/day4/pages/Counter'
import NonPrimitiveState from '../assignments/day4/pages/NonPrimitiveState'
import LayoutFour from '../assignments/day4/layoutFour/LayoutFour'

const Map = () => {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>


        {/* assignmentroutes */}
        {/* day1 */}

        <Route element={<LayoutOne />}>
          <Route path='/stud' element={<StudentProfile />} />
          <Route path='/day1' element={<From />} />
        </Route>


        {/* assignmentroutes */}
        {/* day2 */}
        <Route element={<LayoutTwo />}>
          <Route path='/lobby' element={<Lobby/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>


         {/* assignmentroutes */}
        {/* day Spl class*/}
        <Route element={<LayoutThree />}>
          <Route path='/emp' element={<Employee/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/student' element={<Student />} />
          <Route path='/user' element={<User />} />
        </Route>


          {/* assignmentroutes */}
        {/* day 3 */}
        <Route element={<LayoutThreeA />}>
          <Route path='/studui' element={<StudCardUI/>} />
          <Route path='/management' element={<Management/>} />
          <Route path='/course' element={<Couse/>} />
        
        </Route>

           {/* assignmentroutes */}
        {/* day 4 */}
        <Route element={<LayoutFour />}>
          <Route path='/classComponent' element={<ClassComponent/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/arrayRender' element={<NonPrimitiveState/>} />
        
        </Route>



      </Routes>
    </>
  )
}

export default Map