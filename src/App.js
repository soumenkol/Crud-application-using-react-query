
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from '../src/Pages/Auth/Registration/Registration';
// import Login from './Pages/Auth/Login/Login';
// import Wrapper from "../src/Pages/Layout/Wrapper/Wrapper"
// import ProductList from "../src/Pages/Cms/ProductList/ProductList"
// import Create from "../src/Pages/Cms/Create/Create"
// import Edit from "./Pages/Cms/Edit/Edit";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Wrapper>
//        <Routes>
//         <Route path="/" element={<Registration/>}/>
//         <Route path="/Login" element={<Login/>}/>
//         <Route path="/ProductList" element={<ProductList/>}/>
//         <Route path="/Create" element={<Create/>}/>
//         <Route path="/Edit" element={<Edit/>}/>


//        </Routes>
//        </Wrapper>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
 import { checkToken } from "../src/Redux-toolkit/Slice/authSlice";
import { Suspense,lazy } from 'react';
import { toast } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleProductDetails from "../src/Pages/Cms/SingleProductDetails/SingleProductDetails";
import Edit from "../src/Pages/Cms/Edit/Edit";
import Loading from "./Loading/Loading";
 const UserDashboard=lazy(()=>import("../src/Pages/Cms/UserDashboard/UserDashboard"))
 
 



const Wrapper=lazy(()=>import("../src/Pages/Layout/Wrapper/Wrapper")) 
const  Login =lazy(()=>import('./Pages/Auth/Login/Login') ) 
const Registration=lazy(()=>import('../src/Pages/Auth/Registration/Registration')) 
const  ProductList=lazy(()=>import('../src/Pages/Cms/ProductList/ProductList')) 

const  Create=lazy(()=>import('../src/Pages/Cms/Create/Create')) 

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  return token != null || token != undefined ? (
    children
  ) : (
    <>
      <Navigate to="/" />
      {toast.error("Please go for login either you can't access")}
    </>
  );
}

const publicRoutingName = [
 
  {
    path: "/",
    Component: <Login />
  },
  {
    path: "/Registration",
    Component: <Registration />
  }
];

const privateRoutingName = [

  {
    path: "/Home",
    Component: <UserDashboard />
  },


  {
    path: "/Product",
    Component: <ProductList />
  },
  {
    path:"/Create",
    Component:<Create/>
  },
  {
    
    path:'/singleproduct/:id',

    Component:<SingleProductDetails/>
  },
  {
    path:"Edit/:id",
    Component:<Edit/>
  },
 

];

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <>
      

    <Suspense fallback={<Loading/>}>
    <BrowserRouter>
        <Wrapper>
          <Routes>
            {publicRoutingName.map((route, index) => (
              <Route key={index} exact path={route.path} element={route.Component} />
            ))}

            {privateRoutingName.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            ))}
          </Routes>
        </Wrapper>
      </BrowserRouter>

    </Suspense>

    </>
  );
}

