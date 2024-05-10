import React, {FC, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
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
  reset,
  searchBook,
} from '../../store/slice/resultBooksSearchSlice';
import {ScreenProps} from '../../interfaces/navigation';
import {SearchBy} from '../../types/settings';

const limit = 15;

const renderItem = (book: Book, onSelect: (book: Book) => void) => (
  <BookRow book={book} onPress={onSelect} />
);

const SearchBooks: FC<ScreenProps<'SearchBooksScreen'>> = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<NativeStackRoutes>>();
  const {isLoading, isRefreshing, isLoadMore, searchResultBooks, currentPage} =
    useAppSelector(state => state.books);
  const settingsSelector = useAppSelector(state => state.settings);
  const [searchValue, setSearchValue] = useState('');

  const handleOnEndReached = () => {
    if (currentPage * limit < searchResultBooks.numFound) {
      var newPage = currentPage + 1;
      dispatch(searchBook({q: searchResultBooks.q, page: newPage, limit}));
      dispatch(changePage(newPage));
    }
  };

  const handleOnRefresh = () => {
    dispatch(reset({}));
    dispatch(searchBook({q: searchResultBooks.q, page: 1, limit}));
    dispatch(changePage(1));
  };

  const handleOnPressRow = (book: Book) => navigate('DetailBookScreen', {book});

  const searchBookDispatch = (text?: string) => {
    dispatch(reset({}));
    dispatch(
      searchBook({q: text ? text : searchValue, page: currentPage, limit}),
    );
  };

  return isLoading && !isLoadMore ? (
    <LoadingIndicator />
  ) : (
    <MainContainer>
      <View>
        <View style={styles.config}>
          {settingsSelector.searchBy === SearchBy.BUTTON ? (
            <Pressable onPress={() => searchBookDispatch()}>
              <Text>Buscar</Text>
            </Pressable>
          ) : (
            <View />
          )}
          <Pressable onPress={() => navigate('SettingsScreen')}>
            <Text>Config</Text>
          </Pressable>
        </View>
        <SearchBar
          defaultValue={searchResultBooks.q}
          style={styles.searchBar}
          minTriggerChange={settingsSelector.minTriggerChange}
          onChange={
            settingsSelector.searchBy === SearchBy.INPUT
              ? searchBookDispatch
              : setSearchValue
          }
        />
      </View>
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
