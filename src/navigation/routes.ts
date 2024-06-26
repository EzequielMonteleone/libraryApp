import {Book} from '../types/book';

const MAIN_NAV = {
  SEARCH_BOOKS_SCREEN: 'SearchBooksScreen',
  DETAIL_BOOK_SCREEN: 'DetailBookScreen',
  SETTINGS_SCREEN: 'SettingsScreen',
};

export default MAIN_NAV;

export type NativeStackRoutes = {
  SearchBooksScreen: undefined;
  DetailBookScreen: DetailProps | undefined;
  SettingsScreen: undefined;
};

interface DetailProps {
  book: Book;
}
