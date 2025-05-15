import { Dimensions, PixelRatio, Platform } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
const widthVariable = 375;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / widthVariable;

export const responsiveHeight = (value: number) => {
  let temp = value;
  if (deviceHeight != 896) {
    let temp2 = (value / 896).toFixed(4);
    temp = PixelRatio.roundToNearestPixel(deviceHeight * Number(temp2));
  }
  return temp;
};

export const responsiveWidth = (value: number) => {
  let temp = value;
  if (deviceWidth !== 414) {
    let temp2 = (value / 414).toFixed(4); // 414 is a common base width (e.g., iPhone 11)
    temp = PixelRatio.roundToNearestPixel(deviceWidth * Number(temp2));
  }
  return temp;
};

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

const { width, height } = Dimensions.get("window");
export const isIOS = Platform.OS == "ios";
export const isAndroid = Platform.OS == "android";
const isiPAD = height / width < 1.6;
const isTablet = height / width < 1.6;

export function wp(percentage: any) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

export function hp(percentage: any) {
  const value = (percentage * height) / 100;
  return Math.round(value);
}
