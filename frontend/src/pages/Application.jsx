import { DefaultSidebar } from "../components/DefaultSidebar"



export const Application = ()=>{
    return (
        <div className="flex flex-row w-full h-screen" > 
            <div className="w-1/5 h-full">
                <DefaultSidebar/>
            </div>
            <div className="w-3/4 h-full flex flex-col place-content-evenly">
                <div>
                    <h1 class="mb-2 px-10 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
                        Application Form
                    </h1>
                </div>
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2 px-10">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                            <input type="text" id="first_name" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                            <input type="text" id="last_name" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Roll No</label>
                            <input type="text" id="company" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                        </div>  
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                            <input type="tel" id="phone" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CGPA</label>
                            <input type="url" id="website" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                    </div>
                    <div class="mb-6 px-10">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div class="flex items-start mb-6 px-10">
                        <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" class="mx-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                <div></div>
            </div>
        </div>
    )
}