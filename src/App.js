import './App.css';
import {StoreProvider} from './helper/useStore';
import AppRoutes from './routes';

const App = () => {
	return (
		<StoreProvider>
			<AppRoutes />
		</StoreProvider>
	);
};

export default App;
