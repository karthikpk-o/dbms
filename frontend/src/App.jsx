import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { StudentSignin } from './pages/StudentSignin'
import './App.css'
import { Admindashboard } from './pages/Admindashboard'
import {StudentSignup} from "./pages/StudentSignup"
import { Application } from './pages/Application'
import { Profile } from './pages/Profile'

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/admindashboard" element={<Admindashboard/>}/>
                <Route path="/studentsignin" element={<StudentSignin/>}/>
                <Route path="/studentsignup" element={<StudentSignup/>}/>
                <Route path="/student/application" element={<Application/>}/>
                <Route path="/student/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
