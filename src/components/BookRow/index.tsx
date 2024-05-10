import React, {FC, useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Book} from '../../types/book';
import styles from './styles';

interface BookRowProps {
  book: Book;
  onPress(book: Book): void;
}

const BookRow: FC<BookRowProps> = ({book, onPress}) => {
  const handleOnPress = useCallback(() => onPress(book), [book, onPress]);
  return (
    <Pressable
      testID="BookRow_btn"
      style={styles.container}
      onPress={handleOnPress}>
      <View style={styles.column}>
        <Text style={styles.title}>Título</Text>
        <Text style={styles.value}>{book.title}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Nombre de autor</Text>
        <Text>{book.author_name?.[0] ?? 'not found'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Primer año de publicación</Text>
        <Text>{book.first_publish_year?.toString() ?? ''}</Text>
      </View>
    </Pressable>
  );
};

export default BookRow;
