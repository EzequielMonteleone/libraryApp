import React, {FC, useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {MainContainer} from '../../components/Generic/MainContainer';
import {RadioButton} from '../../components/Generic/RadioButton';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {SearchBy} from '../../types/settings';
import {setSettings} from '../../store/slice/settingsSlice';
import {ScreenProps} from '../../interfaces/navigation';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackRoutes} from '../../navigation/routes';

const Settings: FC<ScreenProps<'SettingsScreen'>> = () => {
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation<NavigationProp<NativeStackRoutes>>();
  const {searchBy, minTriggerChange} = useAppSelector(state => state.settings);
  const [inputValue, setInputValue] = useState(minTriggerChange.toString());

  const onPressRadioButton = (search_by: SearchBy) =>
    dispatch(setSettings({searchBy: search_by, minTriggerChange}));

  const handleOnSave = () => {
    if (inputValue.length > 0) {
      dispatch(setSettings({searchBy, minTriggerChange: Number(inputValue)}));
      goBack();
    }
  };

  return (
    <MainContainer style={styles.container}>
      <Text>Buscar por:</Text>
      <View style={styles.row}>
        <Pressable
          style={styles.item}
          onPress={() => onPressRadioButton(SearchBy.INPUT)}>
          <Text style={styles.titleRadioButton}>Texto</Text>
          <RadioButton selected={searchBy === SearchBy.INPUT} />
        </Pressable>
        <Pressable
          style={styles.item}
          onPress={() => onPressRadioButton(SearchBy.BUTTON)}>
          <Text style={styles.titleRadioButton}>Botón</Text>
          <RadioButton selected={searchBy === SearchBy.BUTTON} />
        </Pressable>
      </View>
      {searchBy === SearchBy.INPUT && (
        <View style={styles.minChangeContainer}>
          <Text>{`Buscar cuando haya mas de ${minTriggerChange.toString()} caracteres`}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInputValue}
            value={inputValue}
            autoCorrect={false}
            maxLength={1}
            inputMode="numeric"
            keyboardType="numeric"
          />
          <Pressable style={styles.changeButton} onPress={handleOnSave}>
            <Text style={styles.changeButtonText}>Cambiar</Text>
          </Pressable>
        </View>
      )}
    </MainContainer>
  );
};

export default Settings;
