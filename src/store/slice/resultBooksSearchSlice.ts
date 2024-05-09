import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {BooksService} from '../../services/books';
import {BooksState} from '../../interfaces/store';
import {BookRequest} from '../../interfaces/book';

const initialState: BooksState = {
  searchResultBooks: {
    numFound: 0,
    start: 0,
    numFoundExact: false,
    num_found: 0,
    q: '',
    docs: [],
  },
  currentPage: 1,
  isLoadMore: false,
  isRefreshing: false,
  isLoading: false,
  hasError: false,
};

const bookService = BooksService.instance();

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
      state.isLoadMore = true;
    },
    reset: (state, _action) => {
      state.searchResultBooks.docs = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(searchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResultBooks = {
        ...action.payload.data,
        docs: [...state.searchResultBooks.docs, ...action.payload.data.docs],
      };
      state.isLoading = false;
      state.isRefreshing = false;
      state.isLoadMore = false;
      state.hasError = false;
    });
    builder.addCase(searchBook.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(searchBook.rejected, state => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.isLoadMore = false;
      state.hasError = true;
    });
  },
});

export const searchBook = createAsyncThunk(
  'books/searchBook',
  async (request: BookRequest) => {
    const response = await bookService.searchBooks(request);
    return response;
  },
);
export const {changePage, reset} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
