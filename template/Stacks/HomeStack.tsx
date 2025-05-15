import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParams} from '../Constants/AppStackParams';
import {RouteProp} from '@react-navigation/native';
import {COLORS} from '../Constants/colors';
import {FONT} from '../Constants/FontConstant';
import {useTranslation} from 'react-i18next';
import HomeIcon from '../Assets/SVG/HomeIcon';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/ProfileScreen';
import Settings from '../Screens/SettingsScreen';

interface Props {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeStack'>;
  route: RouteProp<AppStackParams, 'HomeStack'>;
}

const HomeStack = ({navigation, route}: Props) => {
  const {t} = useTranslation();
  const Tab = createBottomTabNavigator();

  function NoFeedbackTabBarButton({children, onPress}: any) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{alignItems: 'center'}}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={COLORS.BLACK} translucent={true} />
      <Tab.Navigator
        initialRouteName={'HOME'}
        screenOptions={{
          tabBarActiveTintColor: COLORS.BLACK,
          tabBarInactiveTintColor: 'grey',
          tabBarButton: props => <NoFeedbackTabBarButton {...props} />,
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}>
        <Tab.Screen
          name={'HOME'}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color}) => (
              <Text style={[styles.tabLabel, {color}]}>{t('HOME')}</Text>
            ),
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <HomeIcon fillColor={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={'TabProfile'}
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color}) => (
              <Text style={[styles.tabLabel, {color}]}>{t('PROFILE')}</Text>
            ),
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <HomeIcon fillColor={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={'TabSettings'}
          component={Settings}
          options={{
            headerShown: false,
            tabBarLabel: ({focused, color}) => (
              <Text style={[styles.tabLabel, {color}]}>{t('SETTINGS')}</Text>
            ),
            tabBarIcon: ({focused, color}) => (
              <View style={styles.iconContainer}>
                <HomeIcon fillColor={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  tabLabel: {
    fontSize: 10,
    fontFamily: FONT.RubikSemiBold,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 3,
  },
});

export default HomeStack;
