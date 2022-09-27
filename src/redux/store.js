import { configureStore } from '@reduxjs/toolkit';
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { shazemCoreApi } from './services/shazemCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazemCoreApi.reducerPath]: shazemCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazemCoreApi.middleware),
});
