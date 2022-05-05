import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { TOAST_CONFIGS, CustomToaster } from './utils/toast';
import Routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes />
			<Toaster {...TOAST_CONFIGS} children={CustomToaster} />
		</BrowserRouter>
	);
}

export default App;
