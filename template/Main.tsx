import {View, Platform, NativeModules, I18nManager} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import AppStack from './Stacks/AppStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParams} from './Constants/AppStackParams';
import {useAppDispatch} from './Redux/store/store';
import {_retrieveData, _storeData} from './Utils/StoragePreference';
import commonStyles from './Utils/CommonStyle';
import {useTranslation} from 'react-i18next';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'Main'>;
  route: RouteProp<AppStackParams, 'Main'>;
};
const Main = ({navigation, route}: Props) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    var lang =
      Platform.OS == 'ios'
        ? NativeModules.SettingsManager?.settings?.AppleLocale ||
          NativeModules.SettingsManager?.settings?.AppleLanguages[0]
        : NativeModules?.I18nManager?.localeIdentifier;
    const rtlLanguages = ['iw_IL', 'he_IL', 'ar_SA', 'ar_AE'];

    if (rtlLanguages.includes(lang)) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      I18nManager.doLeftAndRightSwapInRTL;
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
  }, []);
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Main;
