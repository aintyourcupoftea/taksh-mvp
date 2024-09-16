import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {
    // Add reducers here
  },
  // Add extra reducers for async actions if needed
});

export default projectsSlice.reducer;