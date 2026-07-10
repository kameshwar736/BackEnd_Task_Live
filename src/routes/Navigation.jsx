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
import StudentForm from '../assignments/day10/pages/StudentForm'
import Layout10 from '../assignments/day10/layout/Layout10'
import Layout9 from '../assignments/day9/layout/Layout9'
import RegisterForm9 from '../assignments/day9/pages/RegisterForm9'
import Layout11 from '../assignments/day11/layout11/Layout11'
import Register11 from '../assignments/day11/pages11/Register11'
import Login11 from '../assignments/day11/pages11/Login11'
import Dashboard from '../assignments/day11/pages11/Dashboard'
import StudentReg from '../assignments/daySp/pages/StudentReg'

import DashboardSp from '../assignments/daySp/pages/DashboardSp'
import Layout13 from '../assignments/day13/layout/Layout13'
import SearchFilter from '../assignments/day13/pages/SearchFilter'
import LoginSP from '../assignments/daySp/pages/LoginSP'
import Layout15 from '../assignments/day15/layout/Layout15'
import Search15 from '../assignments/day15/pages/Search15'
import Layout16 from '../assignments/day16/layout/Layout16'
import Todo6 from '../assignments/day16/pages/Todo6'
import Layout17 from '../assignments/day17/layout/Layout17'
import Resume from '../assignments/day17/pages/Resume'
import Layout18 from '../assignments/day18/layout/Layout18'
import Showdata from '../assignments/day18/pages/Showdata'
import InputProvider from '../assignments/day18/provider/InputProvider'
import UserInput from '../assignments/day18/pages/UserInput'
import Layout20 from '../assignments/day20/layout/Layout20'
import FilterHook from '../assignments/day20/pages/FilterHook'
import LocalStorageHook from '../assignments/day20/pages/LocalStorageHook'


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


        {/* day2 */}
        <Route element={<LayoutTwo />}>
          <Route path='/lobby' element={<Lobby/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>


         {/* day Spl class*/}
        <Route element={<LayoutThree />}>
          <Route path='/emp' element={<Employee/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/student' element={<Student />} />
          <Route path='/user' element={<User />} />
        </Route>


        {/* day 3 */}
        <Route element={<LayoutThreeA />}>
          <Route path='/studui' element={<StudCardUI/>} />
          <Route path='/management' element={<Management/>} />
          <Route path='/course' element={<Couse/>} />
        
        </Route>



         {/* day 4 */}
        <Route element={<LayoutFour />}>
          <Route path='/classComponent' element={<ClassComponent/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/arrayRender' element={<NonPrimitiveState/>} />
        
        </Route>


        {/* day 5 */}
        <Route element={<Layout5 />}>
          <Route path='/hometask5' element={<HomeTask5/>} />
          <Route path='/counter5' element={<Counter5/>}/>
          <Route path='/nameupdate' element={<StringRender/>}/>
        </Route>


        {/* day 6 */}
        <Route element={<LayoutSix/>}>
          <Route path='/array' element={<Array/>} />
          <Route path='/obj' element={<Obj/>}/>
          <Route path='/ArrOFObj' element={<ArrOfObj/>}/>
        </Route>


         {/* day 7*/}
        <Route element={<Layout7/>}>
          <Route path='/display' element={<Display/>} />
        </Route>


         {/* day 8*/}
        <Route element={<Layout8/>}>
          <Route path='/bgcolor' element={<BackgroundColor/>} />
        </Route>


        {/* day 9*/}
        <Route element={<Layout9/>}>
          <Route path='/form9' element={<RegisterForm9/>} />
        </Route>


         {/* day 10*/}
        <Route element={<Layout10/>}>
          <Route path='/studentForm' element={<StudentForm/>} />
        </Route>

          {/* day 11*/}
        <Route element={<Layout11/>}>
          <Route path='/reg11' element={<Register11/>} />
          <Route path='/log11' element={<Login11/>} />
          <Route path='/dash11' element={<Dashboard/>} />
        </Route>

         {/* day Special Test*/}
        <Route element={<Layout11/>}>
          <Route path='/spStudent' element={<StudentReg/>} />
           <Route path='/loginSp' element={<LoginSP/>} />
            <Route path='/dashSP' element={<DashboardSp/>} />
         
        </Route>

        {/* day 13*/}
        <Route element={<Layout13/>}>
          <Route path='/search' element={<SearchFilter/>} />
        </Route>

          {/* day 15*/}
        <Route element={<Layout15/>}>
          <Route path='/search15' element={<Search15/>} />
        </Route>


         {/* day 16*/}
        <Route element={<Layout16/>}>
          <Route path='/todo16' element={<Todo6/>} />
        </Route>

         {/* day 17*/}
        <Route element={<Layout17/>}>
          <Route path='/resume' element={<Resume/>} />
        </Route>

         {/* day 18*/}
       
        <Route element={<Layout18/>}>
   
          <Route path='/showdata' element={<Showdata/>} />
           <Route path='/userinput' element={<UserInput/>} />

        
        </Route>

         <Route element={<Layout20/>}>
   
          <Route path='/hookFilter' element={<FilterHook/>} />
          <Route path='/hookStorage' element={<LocalStorageHook/>} />

        
        </Route>
      

        
        {/* TaskRoute */}
        {/* TaskOne */}
        <Route element={<LayoutTaskOne/>}>
          <Route path='/taskone' element={<TaskOne/>} />
          
        </Route>

       

      </Routes>
    </>
  )
}

export default Map