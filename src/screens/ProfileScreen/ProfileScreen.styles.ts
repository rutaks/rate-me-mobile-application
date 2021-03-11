import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: Dimensions.SIZE_XL,
    marginBottom: Dimensions.SIZE_L,
    flexDirection: 'row',
  },
  avatar: {
    width: Dimensions.SIZE_XL * 5,
    height: Dimensions.SIZE_XL * 5,
    borderRadius: Dimensions.SIZE_XL * 5,
  },
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: Dimensions.SIZE_M,
  },
  logo: {
    height: 30,
    width: 105,
    resizeMode: 'cover',
  },
  name: {
    ...Typography.subtitle,
    fontSize: Dimensions.FONT_SIZE_XL / 1.2,
    color: Colors.BLACK,
    paddingBottom: Dimensions.SIZE_SM / 3,
  },
  fill: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
