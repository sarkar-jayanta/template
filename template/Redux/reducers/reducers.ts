import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import {
  getAppMaintenanceState,
  getUserDetailsAction,
  getUserNotificationCount,
  Login,
} from "../actions/actions";

export const initialState: InitialState = {
  user: undefined,
  isLogin: false,
  isLoading: false,
  isToolTipShown: false,
  selectedLang: "",
  notificationCount: "",
  notificationData: undefined,
  appDictionary: undefined,
  showMainCoinPopup: false,
  notificationPoints: "0",
  isInternetConnctionAvailable: true,
  isForground: false,
  isMaintenance: false
};

export const reducer = createSlice({
  name: "global",
  initialState,
  reducers: {
    isUserLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    updateLanguage: (state, action) => {
      state.selectedLang = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.isLoading = action.payload;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
    updateNotificationData: (state, action) => {
      state.notificationData = action.payload;
    },
    updateToolTipShown: (state, action) => {
      state.isToolTipShown = action.payload;
    },
    updateAppDictionary: (state, action) => {
      state.appDictionary = action.payload;
    },
    updateShowCoinPopup: (state, action) => {
      state.showMainCoinPopup = action.payload;
    },
    updateNotificationPoints: (state, action) => {
      state.notificationPoints = action.payload;
    },
    updateInternetConnection: (state, action) => {
      state.isInternetConnctionAvailable = action.payload;
    },
    updateIsForground:(state, action) => {
      state.isForground = action.payload
    },
    updateIsMaintenance:(state, action) => {
      console.log("action.payload", action.payload)
      state.isMaintenance = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(Login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserDetailsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetailsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data?.data;
      })
      .addCase(getUserDetailsAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserNotificationCount.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserNotificationCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notificationCount = action.payload.data;
      })
      .addCase(getUserNotificationCount.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getAppMaintenanceState.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAppMaintenanceState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isMaintenance = action.payload.data?.underMaintenance;
      })
      .addCase(getAppMaintenanceState.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  isUserLogin,
  updateLanguage,
  updateLoading,
  updateUserData,
  updateNotificationData,
  updateToolTipShown,
  updateAppDictionary,
  updateShowCoinPopup,
  updateNotificationPoints,
  updateInternetConnection,
  updateIsForground,
  updateIsMaintenance
} = reducer.actions;
export default reducer.reducer;
