import { configureStore } from '@reduxjs/toolkit';
import authAction from './auth';

const store = configureStore({
  reducer: {auth: authAction}
});

export default store;