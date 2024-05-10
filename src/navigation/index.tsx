import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './config';
import Routes from './routes';
import SearchBooks from '../screens/SearchBooks';
import DetailBook from '../screens/DetailBook';
import Settings from '../screens/Settings';

const withOutTitle = {title: ''};

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Routes.SEARCH_BOOKS_SCREEN}>
      <Stack.Screen
        name={Routes.SEARCH_BOOKS_SCREEN}
        component={SearchBooks}
        options={withOutTitle}
      />
      <Stack.Screen
        name={Routes.DETAIL_BOOK_SCREEN}
        component={DetailBook}
        options={withOutTitle}
      />
      <Stack.Screen
        name={Routes.SETTINGS_SCREEN}
        component={Settings}
        options={withOutTitle}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
