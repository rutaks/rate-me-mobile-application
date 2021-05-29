/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import ApiProvider from './src/context/Api/ApiProvider';
import CurrentViewProvider from './src/context/CurrentView/CurrentViewProvider';
import {AppNavigator} from './src/navigators';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ApiProvider>
      <CurrentViewProvider>
        <AppNavigator />
      </CurrentViewProvider>
    </ApiProvider>
  );
};

export default App;
