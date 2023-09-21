import { createBrowserRouter }  from "react-router-dom"
import Home from '../pages/Home'
import ShowBooks from "../components/ShowBooks"
import CreateBooks from "../components/CreateBooks"
import EditBooks from "../components/EditBooks"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/libros",
        element: <ShowBooks/>
    },
    {
        path: "/create",
        element: <CreateBooks/>
    },
    {
        path: "/edit/:id",
        element: <EditBooks/>
    },
])