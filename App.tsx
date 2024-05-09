import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import KeyboardView from './src/components/Generic/KeyboardView';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={backgroundStyle}>
          <KeyboardView>
            <Navigation />
          </KeyboardView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
