import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Dimensions.SIZE_SM / 2,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  leftArea: {
    flex: 9,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconStyle: {
    padding: Dimensions.SIZE_L,
  },
  rightArea: {
    marginLeft: Dimensions.SIZE_XL * 6,
    flex: 1,
    alignItems: 'flex-end',
  },
});
