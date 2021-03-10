import {StyleSheet} from 'react-native';
import Dimensions from './dimensions.style';
import Colors from './colors.style';

export default StyleSheet.create({
  title: {
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_XL,
    fontFamily: 'Raleway-ExtraBold',
  },
  subtitle: {
    fontFamily: 'Raleway-ExtraBold',
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_L,
  },
  body: {
    fontFamily: 'Raleway-Medium',
    color: Colors.GRAY,
    fontSize: Dimensions.FONT_SIZE_M,
  },
  caption: {
    fontFamily: 'Raleway-Medium',
    color: Colors.GRAY,
    fontSize: Dimensions.FONT_SIZE_SM,
  },
  captionLarge: {
    fontFamily: 'Raleway-ExtraBold',
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_SM * 1.2,
  },
  label: {
    fontFamily: 'Raleway-ExtraBold',
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_SM,
  },
});
