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
				{/* 		<RequireAuth> */}
				{/* 			<Login /> */}
				{/* 		</RequireAuth> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/register" */}
				{/* 	element={ */}
				{/* 		<RequireAuth> */}
				{/* 			<Login /> */}
				{/* 		</RequireAuth> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/forgot-password" */}
				{/* 	element={ */}
				{/* 		<RequireAuth> */}
				{/* 			<Login /> */}
				{/* 		</RequireAuth> */}
				{/* 	} */}
				{/* /> */}
				{/* <Route */}
				{/* 	path="/reset-password" */}
				{/* 	element={ */}
				{/* 		<RequireAuth> */}
				{/* 			<Login /> */}
				{/* 		</RequireAuth> */}
				{/* 	} */}
				{/* /> */}

				{/* <Route path="/dashboard" element={Dashboard} /> */}
			</Routes>
		</BrowserRouter>
	);
};

const RequireAuth = ({children}) => {
	const {authentication} = useStore();

	return authentication.isLoggedIn ? children : <Navigate to="/login" />;
};

export default AppRoutes;
