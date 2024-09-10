import { RouteObject } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import path from "path";

const routes: RouteObject[] = [
    {
        element:<MainPage/>,
        path:'/'
    },
    {
        element:<CreatePage/>,
        path:'/create'
    },
    {
        element:<UpdatePage/>,
        path:'users/:userid'
    }

]

export default routes