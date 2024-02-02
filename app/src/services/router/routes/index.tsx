import { type RouteObject } from 'react-router-dom';

import { default as Home } from './home.tsx';
import { default as Counter } from './counter.tsx';
import { default as Profile } from './profile.tsx';


const routes: RouteObject[] = [
    Home,
    Counter,
    Profile,
];

export default routes;
