import './App.css';
import {StoreProvider} from './helper/useStore';
import AppRoutes from './routes';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
	return (
		<StoreProvider>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</StoreProvider>
	);
};

export default App;
