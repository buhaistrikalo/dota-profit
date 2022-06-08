import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { itemAPI } from 'services/itemService';

const rootReducer = combineReducers({
    [itemAPI.reducerPath]: itemAPI.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemAPI.middleware).concat(itemAPI.middleware),
});

export const setupStore = () => {
    return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type TypeRootState = ReturnType<typeof store.getState>;
