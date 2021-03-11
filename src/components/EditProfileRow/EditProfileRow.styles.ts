import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  editColumn: {
    flexDirection: 'column',
    padding: Dimensions.SIZE_XL,
    paddingBottom: Dimensions.SIZE_XS / 2,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  editRow: {
    flexDirection: 'row',
    paddingRight: Dimensions.SIZE_XL,
  },
  editTitle: {
    ...Typography.body,
    color: Colors.BLACK,
    fontSize: Dimensions.SIZE_L * 1.1,
    paddingBottom: Dimensions.SIZE_SM,
  },
  editContent: {
    ...Typography.body,
    color: Colors.BLACK,
    fontSize: Dimensions.SIZE_SM,
  },
  rightHint: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});
