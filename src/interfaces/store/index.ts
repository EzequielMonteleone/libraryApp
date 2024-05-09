import {Middleware} from '@reduxjs/toolkit';
import {SearchResultBooks} from '../../types/book';
import {Author} from '../../types/author';
import {Work} from '../../types/work';

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

export interface AuthorState extends BaseState {
  author: Author;
}

export interface WorkState extends BaseState {
  work: Work;
}

interface AppReducers {
  books: BooksState;
  author: AuthorState;
  work: WorkState;
}

export type AppMiddleware = Middleware<{}, AppReducers>;

export enum AsyncThunkActionTypes {
  SEARCHBOOK_FULFILLED = 'books/searchBook/fulfilled',
  SEARCHBOOK_PENDING = 'books/searchBook/pending',
  SEARCHBOOK_REJECTED = 'books/searchBook/rejected',

  GETAUTHOR_FULFILLED = 'author/getAuthor/fulfilled',
  GETAUTHOR_PENDING = 'author/getAuthor/pending',
  GETAUTHOR_REJECTED = 'author/getAuthor/rejected',

  GETWORK_FULFILLED = 'work/getWork/fulfilled',
  GETWORK_PENDING = 'work/getWork/pending',
  GETWORK_REJECTED = 'work/getWork/rejected',
}
