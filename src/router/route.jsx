import React from 'react'
import App from "../App.js";
import Home from '../Component/Home/Home.jsx';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
<Route path='/' element={<App />}>
         <Route path='' element={<Home />}/>
</Route>
    )
)

export default router
