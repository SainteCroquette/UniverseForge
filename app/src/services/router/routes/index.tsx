import { type RouteObject } from 'react-router-dom';

import { default as Home } from './home.tsx';
import { default as Counter } from './counter.tsx';


const routes: RouteObject[] = [
    Home,
    Counter
];

export default routes;
