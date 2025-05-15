import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {AppStackParams} from '../Constants/AppStackParams';
import SplashScreen from '../Screens/SplashScreen';
import HomeStack from './HomeStack';

// Navigator instance with proper param list typing
const Stack = createStackNavigator<AppStackParams>();

// Default screen options
const defaultScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

// Centralized screen config array
const appScreens: Array<{
  name: keyof AppStackParams;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
}> = [
  {
    name: 'Splash',
    component: SplashScreen,
    options: {headerShown: false},
  },
  //This is for BottomNavigationBar, Remove HomeStack.tsx if botton navigation bar is not need 
  {
    name: 'Home',
    component: HomeStack,
    options: {headerShown: false},
  },
  //You can add more screens here.
];

// AppStack component
const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={defaultScreenOptions}>
    {appScreens.map(({name, component, options}) => (
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        options={options}
      />
    ))}
  </Stack.Navigator>
);

export default AppStack;
