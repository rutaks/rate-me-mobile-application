import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Font, Typography} from '../../styles';

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
  starsRow: {flexDirection: 'row'},
  starRatingArea: {
    flexDirection: 'row',
    paddingLeft: Dimensions.SIZE_XL,
    paddingTop: Dimensions.SIZE_XL * 2,
    paddingBottom: Dimensions.SIZE_XL,
  },
  reviewText: {
    ...Typography.captionLarge,
    alignSelf: 'flex-start',
    paddingBottom: Dimensions.SIZE_L,
  },
  reviewTextArea: {
    backgroundColor: Colors.DARK_GRAY,
    width: '100%',
    paddingLeft: Dimensions.FONT_SIZE_SM,
    marginBottom: Dimensions.SIZE_XL,
    ...Font.medium,
  },
});
