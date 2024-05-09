import React, {FC, useCallback, useEffect, useState} from 'react';
import {StyleProp, TextInput, TextStyle} from 'react-native';
import styles from './styles';

interface SearchBarProps {
  placeholder?: string;
  placeholderTextColor?: string;
  minTriggerChange?: number;
  defaultValue?: string;
  onChange(text: string): void;
  style?: StyleProp<TextStyle>;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Buscar',
  placeholderTextColor = 'gray',
  minTriggerChange = 0,
  defaultValue = '',
  style,
  onChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnChange = useCallback(
    (text: string) => {
      setSearchQuery(text);
      if (text.length >= minTriggerChange) {
        onChange(text);
      }
    },
    [minTriggerChange, onChange],
  );

  useEffect(() => {
    setSearchQuery(defaultValue);
  }, [defaultValue]);

  return (
    <TextInput
      placeholder={placeholder}
      value={searchQuery}
      placeholderTextColor={placeholderTextColor}
      style={[styles.container, style]}
      onChangeText={handleOnChange}
    />
  );
};

export default SearchBar;
