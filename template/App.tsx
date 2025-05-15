import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './Redux/store/store';
import './i18n';
import {changeLanguage} from 'i18next';
import {_retrieveData, _storeData} from './Utils/StoragePreference';
import Main from './Main';

const App = () => {
  useEffect(() => {
    _retrieveData('LANG').then((value: any) => {
      changeLanguage(value ?? 'he');
    });
  });

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Main navigation={undefined as any} route={undefined as any} />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
