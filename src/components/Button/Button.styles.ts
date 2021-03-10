import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: '100%',
    height: Dimensions.WINDOW_HEIGHT / 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    ...Typography.label,
  },
  textPrimary: {
    color: Colors.WHITE,
  },
  textSecondary: {
    color: Colors.BLACK,
  },
  textDefault: {
    color: Colors.BLACK,
  },
  textDanger: {
    color: Colors.WHITE,
  },
  buttonPrimary: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonSecondary: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  buttonDefault: {
    backgroundColor: Colors.WHITE,
  },
  buttonDisabled: {
    borderColor: Colors.GRAY,
  },
  buttonTextDisabled: {
    opacity: 0.2,
  },
});
