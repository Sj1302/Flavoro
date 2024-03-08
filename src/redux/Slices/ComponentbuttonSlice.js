import { createSlice } from '@reduxjs/toolkit';

const ComponentbuttonSlice = createSlice({
  name: 'componentbutton',
  initialState: {
    componentbutton: "All"
  },
  reducers: {
    setcomponentbutton: (state, action) => {
        state.componentbutton=action.payload;
    },
    
   
  }
});

export const { setcomponentbutton } = ComponentbuttonSlice.actions;
export default ComponentbuttonSlice.reducer;
