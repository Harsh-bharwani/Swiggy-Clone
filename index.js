import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import FooterComponent from "./src/components/FooterComponent";
import { createBrowserRouter, Outlet, RouterProvider, Link, useParams } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import { useState } from "react";


const App = function() {
    return (
        <> 
            <HeadingComponent />
            {/* <Body/> */}
            <FooterComponent />
            <Link to="/about">About Us</Link> 
            {/* take us to the about */}
            <Link to="/contact">Contact Us</Link>
            {/* take us to the contact */}
            <Outlet/>
            {/* data of children routers will come and sit at Outlet position*/}
        </>
    );
}


const routerInfo=createBrowserRouter([
    {
        path: "/", element: <App/>
    },
    {
        path: "/restaurants/:id", element:<Body/> 
        // children: [
        //     {
        //         path: "about", element: <AboutUs/>
        //     },
        //     {
        //         path: "contact", element: <Contact/>
        //     }
        // ]
    },
    {
        path: "about", element: <AboutUs/>
    }
], {
    future: {
    v7_normalizeFormMethod: true,
  },
});


// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routerInfo}/>);