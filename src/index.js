import React from "react";
import ReactDOM from "react-dom/client"
import { Main, SinglePuppy, AllPuppies } from "./components";

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, } from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Main/>}>
            <Route >
                <Route index element={<AllPuppies />} />
                <Route path=":id" element={<SinglePuppy />}/>
            </Route>
            </Route>

        </>
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
