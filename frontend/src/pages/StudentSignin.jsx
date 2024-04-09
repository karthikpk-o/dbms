
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const StudentSignin = () => {

    const [rollno, setRollno] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Student Sign in"} />
        <InputBox onChange={e=>{
            setRollno(e.target.value);
        }}
        placeholder="NNM22CC069" label={"Roll No"} />
        <InputBox onChange={e=>{
            setPassword(e.target.value);
        }}
        placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} onClick={async () => {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/student/signin", {
                  rollno,
                  password
              });
              
              localStorage.setItem("token", response.data.token);
              navigate("/application");
          } catch (error) {
              if (error.response && error.response.status === 411) {
                  alert(error.response.data.message);
              } else {
                  console.error('Error during signin:', error);
              }
          }
          }}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/studentsignup"} />
      </div>
    </div>
  </div>
}
