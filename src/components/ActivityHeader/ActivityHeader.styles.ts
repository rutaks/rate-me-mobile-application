import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingBottom: Dimensions.SIZE_SM,
  },
  container: {
    marginBottom: 8,
    width: '100%',
    height: Dimensions.WINDOW_HEIGHT / 15,
    alignItems: 'center',
    backgroundColor: Colors.DARK_GRAY,
    flexDirection: 'row',
    borderRadius: 4,
    paddingLeft: Dimensions.SIZE_M,
  },
  iconStyle: {
    padding: 10,
  },
  label: {
    ...Typography.subtitle,
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_M,
    paddingBottom: Dimensions.SIZE_XS,
    paddingTop: Dimensions.SIZE_M,
  },
  input: {
    ...Typography.body,
    flex: 1,
  },
});
