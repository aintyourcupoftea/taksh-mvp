import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './reducers/ProjectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    // Add other reducers here
  },
});