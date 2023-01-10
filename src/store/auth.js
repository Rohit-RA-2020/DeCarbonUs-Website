import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    token: ' ',
    isAuthenticated: false,
  };
  
  const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      signup(state , action) {
        state.token = action.payload;
        state.isAuthenticated = !!action.payload;
        console.log("Signed Up")
        console.log(state.isAuthenticated)
        console.log("token" + state.token)
      },
      login(state , action) {
        state.token = action.payload;
        state.isAuthenticated = !!action.payload;
        console.log("logged in")
        console.log(state.isAuthenticated)
        console.log("token" + state.token)
      },
      logout(state) {
        state.isAuthenticated = false;
        state.token = ' ';
        console.log("logged out")
        console.log(state.isAuthenticated)
        console.log("token" + state.token)
      },
    },
  });

  export const authActions = authSlice.actions;
console.log(authActions)
console.log(authSlice.reducer)
  export default authSlice.reducer;