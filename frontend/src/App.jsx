import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Signin } from './pages/admin/Signin'
import { Signup } from './pages/admin/Signup'
import { StudentSignin } from './pages/student/StudentSignin'
import './App.css'
import { Applied } from './pages/admin/Applied'
import {StudentSignup} from "./pages/student/StudentSignup"
import { Application } from './pages/student/Application'
import { Profile } from './pages/student/Profile'

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/admin/applied" element={<Applied/>}/>
                <Route path="/studentsignin" element={<StudentSignin/>}/>
                <Route path="/studentsignup" element={<StudentSignup/>}/>
                <Route path="/student/application" element={<Application/>}/>
                <Route path="/student/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
