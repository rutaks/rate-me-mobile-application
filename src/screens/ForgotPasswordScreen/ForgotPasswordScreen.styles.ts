import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
  },
  logo: {
    height: 30,
    width: 120,
    resizeMode: 'cover',
    marginBottom: 66,
  },
  heading: {
    ...Typography.captionLarge,
    marginBottom: 61,
  },
  description: {
    ...Typography.body,
    textAlign: 'center',
    marginBottom: 32,
  },
  fill: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
