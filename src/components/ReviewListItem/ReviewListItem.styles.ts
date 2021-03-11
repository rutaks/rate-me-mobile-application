import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: Dimensions.SIZE_XL,
    paddingBottom: Dimensions.SIZE_M,
    flexDirection: 'row',
  },
  leftArea: {flex: 1},
  avatar: {
    width: Dimensions.SIZE_XL * 2.9,
    height: Dimensions.SIZE_XL * 2.9,
    borderRadius: Dimensions.SIZE_XL * 0.3,
    borderWidth: Dimensions.SIZE_SM / 2,
  },
  middleArea: {
    flexDirection: 'column',
    paddingLeft: Dimensions.FONT_SIZE_M,
    flex: 3,
  },
  reviewerName: {
    ...Typography.subtitle,
    color: Colors.BLACK,
    paddingBottom: Dimensions.SIZE_XS,
  },
  noStarsText: {...Typography.subtitle, alignSelf: 'center'},
  starsRow: {flexDirection: 'row'},
  reviewStarsArea: {flexDirection: 'row', alignItems: 'center'},
  reviewDate: {
    ...Typography.caption,
    paddingTop: Dimensions.SIZE_SM / 2,
    paddingLeft: Dimensions.FONT_SIZE_SM,
  },
  rightHint: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});
