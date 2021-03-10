import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
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
