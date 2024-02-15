import { type RouteObject } from 'react-router-dom';

import { default as Home } from './home.tsx';
import { default as Counter } from './counter.tsx';
import { default as Profile } from './profile.tsx';
import { default as Forbidden } from './forbidden.tsx';
import { default as NotFound } from './notFound.tsx';
import { default as Demo } from './demo';

const routes: RouteObject[] = [Home, Demo, Counter, Profile, Forbidden, NotFound];

export default routes;
