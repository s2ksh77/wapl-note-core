import React from 'react';
import { RootStore } from './RootStore';

export const StoreInstance = new RootStore();
export const StoreContext = React.createContext(StoreInstance);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => React.useContext(StoreContext);
