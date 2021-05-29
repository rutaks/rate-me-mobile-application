import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';
import dimensionsStyle from '../../styles/dimensions.style';

export const styles = StyleSheet.create({
  logo: {
    height: 30,
    width: 105,
    resizeMode: 'cover',
  },
  loader: {flex: 1, marginTop: dimensionsStyle.WINDOW_HEIGHT / 2.5},
  fill: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
