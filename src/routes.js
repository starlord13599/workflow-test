import { useRoutes } from 'react-router-dom';

import { PUBLIC_ROUTES } from './pages';

function Router() {
	const routes = useRoutes(PUBLIC_ROUTES);
	return routes;
}

export default Router;
