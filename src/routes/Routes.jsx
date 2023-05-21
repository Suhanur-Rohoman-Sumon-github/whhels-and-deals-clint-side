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
import Error from "../error/Error";
import SingleAlltoyDtails from "../pages/allTyoes/SingleAlltoyDtails";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<App />,
        errorElement:<Error />,
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
            loader:({params})=>fetch(`https://wheels-and-deals-server-side.vercel.app/cars/${params.id}`)
           },
           {
            path:'/traks/:id',
            element:<PrivateRout ><CarsDtails /></PrivateRout>,
            loader:({params})=>fetch(`https://wheels-and-deals-server-side.vercel.app/truks/${params.id}`)
           },
           {
            path:'/police/:id',
            element:<PrivateRout ><SinglePolices /></PrivateRout>,
            loader:({params})=>fetch(`https://wheels-and-deals-server-side.vercel.app/police/${params.id}`)
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
            element:<PrivateRout ><AddToyes /></PrivateRout>
        },
        {
            path:'/mytoyes',
            element:<PrivateRout><MyToyes/></PrivateRout>
        },
        {
            path:'/alltoyes/myToyes/:id',
            element:<PrivateRout><SingleAlltoyDtails /></PrivateRout>,
            loader:({params})=>fetch(`https://wheels-and-deals-server-side.vercel.app/alltoyes/myToyes/${params.id}`)
        }
        ]
    }
    

])
export default router