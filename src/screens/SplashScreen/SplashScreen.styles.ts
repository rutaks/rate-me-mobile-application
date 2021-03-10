import {StyleSheet} from 'react-native';
import {Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 3,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 120,
    resizeMode: 'cover',
  },
  author: {...Typography.caption, paddingBottom: Dimensions.SIZE_M},
});
