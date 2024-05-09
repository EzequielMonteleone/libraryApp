import React, {FC, useEffect} from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {ScreenProps} from '../../interfaces/navigation';
import {getWork} from '../../store/slice/workSlice';
import {getAuthor} from '../../store/slice/authorSlice';
import {LoadingIndicator} from '../../components/Generic/LoadingIndicator';
import {MainContainer} from '../../components/Generic/MainContainer';
import styles from './styles';

const getUrlImage = (isbnCode: string): string => {
  return 'https://covers.openlibrary.org/b/isbn/{code}-M.jpg'.replace(
    '{code}',
    isbnCode,
  );
};

const DetailBook: FC<ScreenProps<'DetailBookScreen'>> = props => {
  const {route} = props;
  const dispatch = useAppDispatch();
  const authorSelector = useAppSelector(state => state.author);
  const workSelector = useAppSelector(state => state.work);

  useEffect(() => {
    const workKey = route?.params?.book.key;
    const authorKey = route?.params?.book.author_key?.[0];
    dispatch(getAuthor(authorKey ?? ''));
    dispatch(getWork(workKey ?? ''));
  }, [dispatch, route?.params?.book.author_key, route?.params?.book.key]);

  return authorSelector.isLoading || workSelector.isLoading ? (
    <LoadingIndicator />
  ) : (
    <MainContainer style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: getUrlImage(route?.params?.book.isbn?.[0] ?? ''),
          }}
          resizeMode="contain"
          style={styles.bookImage}
        />
        <View style={styles.row}>
          <Text style={styles.title}>Titulo: </Text>
          <Text style={styles.value}>{workSelector.work.title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Primer año de publicación: </Text>
          <Text style={styles.value}>
            {workSelector.work.first_publish_date}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Descripción: </Text>
          <Text style={styles.value}>
            {workSelector.work.description?.value}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Autor: </Text>
          <Text style={styles.value}>{authorSelector.author.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Bio: </Text>
          <Text style={styles.value}>{authorSelector.author.bio}</Text>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default DetailBook;
