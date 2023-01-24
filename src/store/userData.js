import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userData: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    settingUserData(state , action){
        state.userData = action.payload;
        console.log(action.payload)
        localStorage.setItem("userData", action.payload);
    }
  },
});



export const dataActions = dataSlice.actions;
console.log(dataActions);
console.log(dataSlice.reducer);
export default dataSlice.reducer;
