import {Middleware} from '@reduxjs/toolkit';
import {SearchResultBooks} from '../../types/book';

export interface BaseState {
  isRefreshing: boolean;
  isLoading: boolean;
  hasError: boolean;
}

export interface BooksState extends BaseState {
  searchResultBooks: SearchResultBooks;
  currentPage: number;
  isLoadMore: boolean;
}

interface AppReducers {
  books: BooksState;
}

export type AppMiddleware = Middleware<{}, AppReducers>;

export enum AsyncThunkActionTypes {
  SEARCHBOOK_FULFILLED = 'books/searchBook/fulfilled',
  SEARCHBOOK_PENDING = 'books/searchBook/pending',
  SEARCHBOOK_REJECTED = 'books/searchBook/rejected',
}
