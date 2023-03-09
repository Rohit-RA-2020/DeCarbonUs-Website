import { configureStore } from '@reduxjs/toolkit';
import userAction from './user';
// import { dataActions } from './userData';

const store = configureStore({
  reducer: {user: userAction}
});
export default store;