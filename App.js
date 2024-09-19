import React, { useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';

import AppNavigation from './App/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import { mystore } from './App/Utils/Redux/MyStore';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './App/Container/Screens/Main';
console.disableYellowBox = true;
 const persistor = persistStore(mystore);
const App = () => {




 return (
        <Provider store={mystore}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );

};

export default App;