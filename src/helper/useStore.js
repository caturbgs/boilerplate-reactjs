import React, {useMemo} from 'react';
import {RootStore} from '../stores';

const storeContext = React.createContext(null);

export const store = new RootStore();

export const StoreProvider = ({children}) => {
	const root = useMemo(() => store ?? new RootStore(), []);

	return <storeContext.Provider value={root}>{children}</storeContext.Provider>;
};

export const useStore = () => {
	const context = React.useContext(storeContext);

	if (context === undefined) {
		throw new Error('useStore must be used within a StoreProvider.');
	}

	return context;
};
