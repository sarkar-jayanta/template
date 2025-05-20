import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from '../../Utils/CommonFunctions';


//define you actions here

// export const Login = createAsyncThunk(
//   '',
//   async (email: string, thunkAPI) => {
//     try {
//       return await LoginService(email);
//     } catch (error: any) {
//       const message = errorMessage(error);
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );