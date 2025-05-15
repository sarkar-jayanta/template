import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;
const getResponsiveIconSize = (baseSize = 100) => {
  // Calculate scaling factor based on device width and height
  const scaleFactor = Math.min(
    width / guidelineBaseWidth,
    height / guidelineBaseHeight,
  );

  // Scale the base size
  const responsiveSize = baseSize * scaleFactor;

  return responsiveSize;
};

export {horizontalScale, verticalScale, moderateScale, getResponsiveIconSize};
