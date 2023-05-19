import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login-and-Sinup/login/Login";
import Sinup from "../pages/Login-and-Sinup/sinup/Sinup";
import CarsDtails from "../pages/home/ShopeByCatagory/cars/CarsDtails";
import TrukCartDetails from "../pages/home/ShopeByCatagory/truks/TrukCartDetails";
import SinglePolices from "../pages/home/ShopeByCatagory/police/SinglePolices";
import AllTyos from "../pages/allTyoes/AllTyos";
import AddToyes from "../pages/addtoyes/AddToyes";
import Blog from "../pages/blog/Blog";
import MyToyes from "../pages/myTooyes/MyToyes";
import PrivateRout from "./PrivateRout";

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
            element:<PrivateRout ><TrukCartDetails /></PrivateRout>,
            loader:({params})=>fetch(`http://localhost:5001/cars/${params.id}`)
           },
           {
            path:'/traks/:id',
            element:<CarsDtails />,
            loader:({params})=>fetch(`http://localhost:5001/truks/${params.id}`)
           },
           {
            path:'/police/:id',
            element:<PrivateRout ><SinglePolices /></PrivateRout>,
            loader:({params})=>fetch(`http://localhost:5001/police/${params.id}`)
           },
           {
            path:'/alltoyes',
            element:<AllTyos />
        },
        {
            path:'/blog',
            element:<Blog />
        },
        {
            path:'/addtoyes',
            element:<AddToyes />
        },
        {
            path:'/mytoyes',
            element:<MyToyes/>
        }
        ]
    }
    

])
export default router