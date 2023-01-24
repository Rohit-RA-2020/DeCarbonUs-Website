import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: " ",
  isAuthenticated: false,
  userInfo: {},
  userResults: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialAuthState,
  reducers: {
    signup(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      localStorage.setItem("token", action.payload);
      console.log("Signed Up");
      console.log(state.isAuthenticated);
      console.log("token" + state.token);
    },
    login(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      localStorage.setItem("token", action.payload);
      console.log("logged in");
      console.log(state.isAuthenticated);
      console.log("token" + state.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userResults");
      console.log("logged out");
      console.log(state.isAuthenticated);
      console.log("token " + state.token);
    },
    settingUserInfo(state, action) {
      state.userInfo = action.payload;
      console.log(action.payload);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    settingUserResults(state, action) {
      state.userResults = action.payload;
      console.log(action.payload);
      localStorage.setItem("userResults", JSON.stringify(action.payload));
    },
  },
});

export const userActions = userSlice.actions;
console.log(userActions);
console.log(userSlice.reducer);
export default userSlice.reducer;
