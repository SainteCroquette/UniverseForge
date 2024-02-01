import { type RouteObject } from 'react-router-dom';

import HomePage from "@pages/home/HomePage.tsx";

const homeRoute: RouteObject = {
    path: '/',
    element: <HomePage/>,
};

export default homeRoute;
