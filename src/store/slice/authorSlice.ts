import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthorState} from '../../interfaces/store';
import {AuthorService} from '../../services/author';

const initialState: AuthorState = {
  author: {
    name: '',
    birth_date: '',
    alternate_names: [],
    personal_name: '',
    bio: '',
    wikipedia: '',
    death_date: '',
  },
  isRefreshing: false,
  isLoading: false,
  hasError: false,
};

const authorService = AuthorService.instance();

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAuthor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.author = action.payload.data;
      state.isLoading = false;
      state.isRefreshing = false;
      state.hasError = false;
    });
    builder.addCase(getAuthor.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(getAuthor.rejected, state => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.hasError = true;
    });
  },
});

export const getAuthor = createAsyncThunk(
  'author/getAuthor',
  async (id: string) => {
    const response = await authorService.getAuthor(id);
    return response;
  },
);
export const authorReducer = authorSlice.reducer;
