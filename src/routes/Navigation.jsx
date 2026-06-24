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
import HomeTask5 from '../assignments/day5/pages5/HomeTask5'
import Layout5 from '../assignments/day5/layout5/Layout5'
import Counter5 from '../assignments/day5/pages5/Counter5'
import StringRender from '../assignments/day5/pages5/StringRender'
import Array from '../assignments/day6/pages/Array'
import Obj from '../assignments/day6/pages/Obj'
import ArrOfObj from '../assignments/day6/pages/ArrOfObj'
import LayoutSix from '../assignments/day6/layout6/LayoutSix'
import TaskOne from '../task/t1/pagesT1/TaskOne'
import LayoutTaskOne from '../task/t1/layoutT1/LayoutTaskOne'
import PlaceTrackTask from '../pages/PlaceTrackTask'
import BackgroundColor from '../assignments/day8/pages/BackgroundColor'
import Layout8 from '../assignments/day8/layout8/Layout8'
import Layout7 from '../assignments/day7/layout7/Layout7'
import Display from '../assignments/day7/pages/Display'


const Map = () => {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/placeTrackTask' element={<PlaceTrackTask/>} />

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


        {/* assignmentroutes */}
        {/* day 5 */}
        <Route element={<Layout5 />}>
          <Route path='/hometask5' element={<HomeTask5/>} />
          <Route path='/counter5' element={<Counter5/>}/>
          <Route path='/nameupdate' element={<StringRender/>}/>
        </Route>


        {/* assignmentroutes */}
        {/* day 6 */}
        <Route element={<LayoutSix/>}>
          <Route path='/array' element={<Array/>} />
          <Route path='/obj' element={<Obj/>}/>
          <Route path='/ArrOFObj' element={<ArrOfObj/>}/>
        </Route>


        
        {/* TaskRoute */}
        {/* TaskOne */}
        <Route element={<LayoutTaskOne/>}>
          <Route path='/taskone' element={<TaskOne/>} />
        </Route>

           {/* assignmentroutes */}
        {/* day 8*/}
        <Route element={<Layout7/>}>
          <Route path='/display' element={<Display/>} />
        </Route>


        {/* assignmentroutes */}
        {/* day 8*/}
        <Route element={<Layout8/>}>
          <Route path='/bgcolor' element={<BackgroundColor/>} />
        </Route>



      </Routes>
    </>
  )
}

export default Map