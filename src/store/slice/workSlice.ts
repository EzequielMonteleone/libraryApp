import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {WorkState} from '../../interfaces/store';
import {WorkService} from '../../services/work';

const initialState: WorkState = {
  work: {
    description: {
      type: '',
      value: '',
    },
    title: '',
    first_publish_date: '',
  },
  isRefreshing: false,
  isLoading: false,
  hasError: false,
};

const workService = WorkService.instance();

export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWork.fulfilled, (state, action) => {
      state.isLoading = false;
      state.work = action.payload.data;
      state.isLoading = false;
      state.isRefreshing = false;
      state.hasError = false;
    });
    builder.addCase(getWork.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(getWork.rejected, state => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.hasError = true;
    });
  },
});

export const getWork = createAsyncThunk('work/getWork', async (id: string) => {
  const response = await workService.getWork(id);
  return response;
});
export const workReducer = workSlice.reducer;
