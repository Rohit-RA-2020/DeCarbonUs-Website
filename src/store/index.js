import { configureStore } from '@reduxjs/toolkit';
import userAction from './auth';
// import { dataActions } from './userData';

const store = configureStore({
  reducer: {user: userAction}
});
export default store;