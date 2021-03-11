import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  logo: {
    height: 30,
    width: 105,
    resizeMode: 'cover',
  },
  fill: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingTop: Dimensions.SIZE_XL,
    paddingLeft: Dimensions.SIZE_XL,
    paddingRight: Dimensions.SIZE_XL,
    alignItems: 'center',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    paddingRight: Dimensions.SIZE_M,
    paddingTop: Dimensions.SIZE_M,
  },
  avatar: {
    width: Dimensions.SIZE_XL * 5,
    height: Dimensions.SIZE_XL * 5,
    borderRadius: Dimensions.SIZE_XL * 5,
    borderWidth: Dimensions.SIZE_SM / 2,
    borderColor: Colors.PRIMARY,
  },
  reviewerName: {
    ...Typography.subtitle,
    paddingBottom: Dimensions.SIZE_XS,
    paddingTop: Dimensions.SIZE_L,
  },
  noStarsText: {...Typography.subtitle, alignSelf: 'center'},
  starsRow: {flexDirection: 'row', paddingBottom: Dimensions.SIZE_XL * 1.5},
  starRatingArea: {
    flexDirection: 'row',
    paddingLeft: Dimensions.SIZE_XL,
    paddingBottom: Dimensions.SIZE_XL,
  },
  reviewHeading: {
    ...Typography.captionLarge,
    paddingBottom: Dimensions.SIZE_SM,
  },
  reviewText: {
    ...Typography.body,
    color: Colors.BLACK,
    textAlign: 'center',
    lineHeight: Dimensions.FONT_SIZE_XL,
    paddingBottom: Dimensions.FONT_SIZE_SM,
  },
  reviewDate: {
    ...Typography.caption,
    textAlign: 'center',
    lineHeight: Dimensions.FONT_SIZE_XL,
    paddingBottom: Dimensions.FONT_SIZE_XL,
  },
  reviewReceivedByText: {
    ...Typography.caption,
    color: Colors.GRAY,
    textAlign: 'center',
    lineHeight: Dimensions.FONT_SIZE_XL,
    backgroundColor: Colors.DARK_GRAY,
    paddingLeft: Dimensions.SIZE_XL,
    paddingRight: Dimensions.SIZE_XL,
    borderRadius: Dimensions.SIZE_M,
  },
});
