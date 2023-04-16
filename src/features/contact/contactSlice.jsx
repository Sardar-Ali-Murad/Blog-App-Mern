import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  alertText: "",
  alertType: "",
  showAlert: false,
    name: "",
    email: "",
    contact: "",
    message: "",
    reason:""
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    removeAlert: (state) => {
      state.isLoading = false;
      (state.alertText = ""), (state.alertType = ""), (state.showAlert = false);
    },
    dispalyAlert: (state, action) => {
      (state.isLoading = true),
        (state.alertText = action.payload.alertText),
        (state.alertType = action.payload.alertType),
        (state.showAlert = true);
    },
    handleEvents:(state,payload)=>{
      state[action.payload.name]=action.payload.value
    },
    removeEvents:(state)=>{
      state.name= "",
      state.email= "",
      state.contact= "",
      state.message="",
      state.reason=""
    }
  },
});

export const { removeAlert, dispalyAlert,handleEvents ,removeEvents} = contactSlice.actions;

export default contactSlice.reducer;
