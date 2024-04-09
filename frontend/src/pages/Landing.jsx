import { ButtonLink } from "../components/ButtonLink"

export const Landing = ()=>{
    return(
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="w-1/4 bg-green-500 h-full"></div>
                <div className="w-3/4 h-full flex flex-col place-content-evenly">
                    <div className="text-center">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-black">
                            Hostel Management System
                        </h1>
                        <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
                            Allot Hostels with ease
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <ButtonLink to={"/signin"} label={"Admin"}/>
                        <ButtonLink to={"/studentsignin"} label={"Student"}/>
                    </div>
                </div>
            </div>
        </>
    )
}