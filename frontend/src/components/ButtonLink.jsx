import { Link } from "react-router-dom"

export function ButtonLink({to, label})
{
    return <Link to={to} className="m-8 px-8 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {label}
    </Link> 
}