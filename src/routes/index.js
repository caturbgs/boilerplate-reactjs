import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import {useStore} from '../helper/useStore';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				{/* <Route */}
				{/* 	path="/login" */}
				{/* 	element={ */}
				{/* 		<ProtectedRoute> */}
				{/* 			<Login /> */}
				{/* 		</ProtectedRoute> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/register" */}
				{/* 	element={ */}
				{/* 		<ProtectedRoute> */}
				{/* 			<Login /> */}
				{/* 		</ProtectedRoute> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/forgot-password" */}
				{/* 	element={ */}
				{/* 		<ProtectedRoute> */}
				{/* 			<Login /> */}
				{/* 		</ProtectedRoute> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/reset-password" */}
				{/* 	element={ */}
				{/* 		<ProtectedRoute> */}
				{/* 			<Login /> */}
				{/* 		</ProtectedRoute> */}
				{/* 	} */}
				{/* /> */}

				{/* <Route path="/dashboard" element={Dashboard} /> */}
			</Routes>
		</BrowserRouter>
	);
};

const ProtectedRoute = ({children}) => {
	const {authentication} = useStore();

	return authentication.isLoggedIn ? children : <Navigate to="/login" />;
};

export default AppRoutes;
