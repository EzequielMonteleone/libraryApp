import {createSlice} from '@reduxjs/toolkit';
import {SettingState} from '../../interfaces/store';
import {SearchBy} from '../../types/settings';

const initialState: SettingState = {
  searchBy: SearchBy.INPUT,
  minTriggerChange: 3,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.searchBy = action.payload.searchBy;
      state.minTriggerChange = action.payload.minTriggerChange;
    },
  },
  extraReducers: () => {},
});

export const {setSettings} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
