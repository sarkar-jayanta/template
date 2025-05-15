import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  CheckMaintenance,
  GetUserDetailsService,
  GetUserNotificationCount,
  LoginService,
} from '../services/services';
import { errorMessage } from '../../Utils/CommonFunctions';

export const Login = createAsyncThunk(
  'Login',
  async (email: string, thunkAPI) => {
    try {
      return await LoginService(email);
    } catch (error: any) {
      const message = errorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserDetailsAction = createAsyncThunk(
  'getCurrentUser',
  async (id: string, thunkAPI) => {
    try {
      return GetUserDetailsService(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserNotificationCount = createAsyncThunk(
  'getNotificationCount',
  async (_, thunkAPI) => {
    try {
      return GetUserNotificationCount();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const getAppMaintenanceState = createAsyncThunk(
  'getAppMaintenanceState',
  async (_, thunkAPI) => {
    try {
      return CheckMaintenance();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);