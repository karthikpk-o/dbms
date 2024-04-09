import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { StudentSignin } from './pages/StudentSignin'
import './App.css'
import { Admindashboard } from './pages/Admindashboard'
import {StudentSignup} from "./pages/StudentSignup"
import { Application } from './pages/Application'

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/application" element={<Landing/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/admindashboard" element={<Admindashboard/>}/>
                <Route path="/studentsignin" element={<StudentSignin/>}/>
                <Route path="/studentsignup" element={<StudentSignup/>}/>
                <Route path="/" element={<Application/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
