import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincesSlice = createSlice({
  name: "Provinces Slice",
  initialState: {
    provinces: data,
  },
  reducers: {
    updateProvinces(state, action) {
      state.provinces.push(action.payload);
    }
  },
})

const provincesReducer = provincesSlice.reducer;
const {updateProvinces} = provincesSlice.actions;

export default provincesReducer;
export {updateProvinces};