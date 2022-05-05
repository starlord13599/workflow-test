import { Navigate } from 'react-router-dom';

import DrawerLayout from '../layouts/DrawerLayout';
import Home from './home/Home';

export const PUBLIC_ROUTES = [
	{
		path: '/',
		element: <DrawerLayout />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: '/',
				element: <Navigate to="/home" />,
			},
		],
	},
	{
		path: '*',
		element: <p>Not Found</p>,
	},
];

export const PRIVATE_ROUTES = [
	//Add your private routes here
	// {
	// 	path: '/',
	// 	element: <DrawerLayout />,
	// 	children: [
	// 		{
	// 			path: 'dashboard',
	// 			element: <Dashboard />,
	// 		},
	// 		{
	// 			path: '/',
	// 			element: <Navigate to="/dashboard" />,
	// 		},
	// 	],
	// },
];
