import {StyleSheet} from 'react-native';
import {Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: Dimensions.SIZE_XS,
    width: 48,
    height: 48,
  },
});
