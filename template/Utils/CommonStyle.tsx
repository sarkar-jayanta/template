import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../Helper/DeviceDimension';
import {COLORS} from '../Constants/colors';

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: WIDTH,
    height: HEIGHT,
  },
});

export default commonStyles;
