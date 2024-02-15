import type { RouteObject } from 'react-router-dom';

import { default as Errors } from './errors.tsx';

const demoRoutes: RouteObject = {
    path: 'demo',
    children: [Errors],
};

export default demoRoutes;
