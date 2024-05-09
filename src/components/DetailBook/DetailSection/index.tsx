import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface DetailSectionProps {
  title: string;
  detail: string;
}

const DetailSection: FC<DetailSectionProps> = ({title, detail}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{detail}</Text>
    </View>
  );
};

export default DetailSection;
