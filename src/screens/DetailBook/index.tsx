import React, {FC, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {ScreenProps} from '../../interfaces/navigation';
import {getWork} from '../../store/slice/workSlice';
import {getAuthor} from '../../store/slice/authorSlice';
import {LoadingIndicator} from '../../components/Generic/LoadingIndicator';
import {MainContainer} from '../../components/Generic/MainContainer';
import styles from './styles';
import DetailSection from '../../components/DetailBook/DetailSection';

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
        <DetailSection title="Titulo: " detail={workSelector.work.title} />
        <DetailSection
          title="Primer año de publicación: "
          detail={workSelector.work.first_publish_date}
        />
        <DetailSection
          title="Descripción: "
          detail={workSelector.work.description?.value}
        />
        <DetailSection title="Autor: " detail={authorSelector.author.name} />
        <DetailSection title="Bio: " detail={authorSelector.author.bio} />
      </ScrollView>
    </MainContainer>
  );
};

export default DetailBook;
