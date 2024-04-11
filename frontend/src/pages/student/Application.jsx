import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { DefaultSidebar } from "../../components/DefaultSidebar"
import axios from "axios";



export const Application = ()=>{

    const navigate = useNavigate();
    const [phno, setPhno] = useState();
    const [cgpa, setCGPA] = useState();
    const [bday, setBday] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [pemail, setPEmail] = useState();
    const [pname, setPName] = useState();
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [rollno, setRollNo] = useState();

    const JWT_TOKEN = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/v1/student/token", {
              headers: {
                Authorization: `Bearer ${JWT_TOKEN}`, // Include JWT in Authorization header
              },
            });
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname);
            setRollNo(response.data.rollno);
            // Set other user data as needed
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
      
        fetchData();
      }, [JWT_TOKEN]);

    

    return (
        <div className="flex flex-row w-full h-screen" > 
            <div className="w-1/5 h-full">
                <DefaultSidebar/>
            </div>
            <div className="w-3/4 h-full flex flex-col place-content-evenly">
                <div>
                    <h1 className="mb-2 px-10 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
                        Application Form
                    </h1>
                </div>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-3 px-10">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                            <label id="first-name" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {typeof firstname !== 'undefined' ? firstname : 'John'}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                            <label id="last-name" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {typeof lastname !== 'undefined' ? lastname : 'John'}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="rollno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Roll No</label>
                            <label id="last-name" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {typeof rollno !== 'undefined' ? rollno : 'John'}
                            </label>
                        </div>  
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                            <input type="tel" id="phone" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required 
                            onChange={e=>setPhno(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CGPA</label>
                            <input type="number" step="0.01" id="cgpa" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8.5" required 
                            onChange={e=>setCGPA(parseFloat(e.target.value))}/>
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Birth Date</label>
                            <input type="date" id="bday" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2004-10-20" required 
                            onChange={e=>setBday(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gender</label>
                            <input type="text" id="gender" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Non-Binary" required 
                            onChange={e=>setGender(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Parent's name</label>
                            <input type="text" id="first_name" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required 
                            onChange={e=>setPName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-6 px-10">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required 
                        onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-6 px-10">
                        <label htmlFor="email-parent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Parent's Email address</label>
                        <input type="email" id="email-parent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required 
                        onChange={e=>setPEmail(e.target.value)}/>
                    </div>
                    <div className="flex items-start mb-6 px-10">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button className="mx-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={async()=>{
                        try{
                            event.preventDefault();
                            const response = await axios.post("http://localhost:3000/api/v1/student/apply",{
                                firstname,
                                lastname,
                                cgpa,
                                bday,
                                gender,
                                pemail,
                                email,
                                pname,
                                phno,
                                rollno,
                            });
                            alert(response.data.message);
                            navigate("/student/profile")
                        }catch (error) {
                            if (error.response && error.response.status === 411) {
                                alert(error.response.data.message);
                            } else {
                                console.error('Error during signup');
                            }
                        }
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}