import { type RouteObject } from 'react-router-dom';

import HomePage from "@pages/home/HomePage.tsx";

const homeRoute: RouteObject = {
    element: <HomePage/>,
    index: true,
};

export default homeRoute;
