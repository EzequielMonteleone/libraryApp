import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {MainContainer} from '../../components/Generic/MainContainer';
import {LoadingIndicator} from '../../components/Generic/LoadingIndicator';
import {NativeStackRoutes} from '../../navigation/routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Separator from '../../components/Generic/Separator';
import {Book} from '../../types/book';
import BookRow from '../../components/BookRow';
import SearchBar from '../../components/Generic/SearchBar';
import styles from './styles';
import {
  changePage,
  searchBook,
  restart,
} from '../../store/slice/resultBooksSearchSlice';

const limit = 30;

const renderItem = (book: Book, onSelect: (book: Book) => void) => (
  <BookRow book={book} onPress={onSelect} />
);

const SearchBooks = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<NativeStackRoutes>>();
  const {isLoading, isRefreshing, isLoadMore, searchResultBooks, currentPage} =
    useAppSelector(state => state.books);

  useEffect(() => {
    if (searchResultBooks.q.length > 0) {
      dispatch(searchBook({q: searchResultBooks.q, page: currentPage, limit}));
    }
  }, [currentPage, dispatch, searchResultBooks.q]);

  const handleOnEndReached = () => {
    if (currentPage * limit < searchResultBooks.numFound) {
      dispatch(changePage(currentPage + 1));
    }
  };

  const handleOnRefresh = () => dispatch(restart({}));

  const handleOnPressRow = (book: Book) => {
    console.log(book);
    navigate('DetailBookScreen');
  };

  const handleOnChangeText = (text: string) =>
    dispatch(searchBook({q: text, page: currentPage, limit}));

  return isLoading && !isLoadMore ? (
    <LoadingIndicator />
  ) : (
    <MainContainer>
      <SearchBar
        defaultValue={searchResultBooks.q}
        style={styles.searchBar}
        minTriggerChange={3}
        onChange={handleOnChangeText}
      />
      <FlatList<Book>
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        data={searchResultBooks.docs}
        renderItem={({item}) => renderItem(item, handleOnPressRow)}
        keyExtractor={(item, index) => `${item.cover_i}_${index}`}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={isLoadMore ? <ActivityIndicator /> : undefined}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.5}
      />
    </MainContainer>
  );
};

export default SearchBooks;
