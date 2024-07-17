import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import boxScoresReducer from '../features/boxScores/boxScoresSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boxScores: boxScoresReducer,
  },
});
