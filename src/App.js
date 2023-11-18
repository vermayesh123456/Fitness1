import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './pages/User';
import CreateStudent from '../src/components/CreateStudent'
import StudentList from '../src/components/StudentList'
import Editstudent from '../src/components/Editstudent'
import BMICalc from './pages/BMICalc';
import Food from './pages/Food';


function App() {
  return (
 <Box width="400px" sx={{width:{xl:"1488px"}}} m='auto'>
   <Navbar/>
    <Routes>
      <Route path='/Fitness' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      <Route path='/user'  element={<User/>}/>
      <Route path='/create-student' element={<CreateStudent/>}/>
      <Route path='/student-list' element={<StudentList/>}/>
      <Route path="/edit-student/:id" element={<Editstudent />}/>
      <Route path="/bmi" element={<BMICalc/>}/>
      <Route path="/food" element={<Food/>}/>
    </Routes>
    <Footer/>
 </Box>
    );
}

export default App;
