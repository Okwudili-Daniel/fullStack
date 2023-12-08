import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import HomePage from "../pages/HomePage";
import AddTask from "../pages/AddTask";

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                index: true,
                path: "/add-task",
                element: <AddTask/>
            }
        ]
    }
])