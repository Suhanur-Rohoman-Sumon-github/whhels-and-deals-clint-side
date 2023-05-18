import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login-and-Sinup/login/Login";
import Sinup from "../pages/Login-and-Sinup/sinup/Sinup";
import CarsDtails from "../pages/home/ShopeByCatagory/cars/CarsDtails";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<App />,
        children:[
            {path:'/',
            element:<Home />},
            {
                path:'/login',
                element:<Login />
            },
           {
            path:'/sinup',
            element:<Sinup />
           },
           {
            path:'/cars/:id',
            element:<CarsDtails />,
            loader:({params})=>fetch(`http://localhost:5001/cars/${params.id}`)
           }
        ]
    }
])
export default router