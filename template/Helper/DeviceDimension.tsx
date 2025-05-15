import { Dimensions, StatusBar } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const screenHeight = Dimensions.get("screen").height;
export const windowHeight = Dimensions.get("window").height;

export const navBarHeight = () => {
  const screenHeight = Dimensions.get("screen").height;
  const windowHeight = Dimensions.get("window").height;
  const navbarHeight = screenHeight - windowHeight; //+ StatusBar.currentHeight;
  return navbarHeight;
};
