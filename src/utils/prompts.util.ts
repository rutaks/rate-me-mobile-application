import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {Colors} from '../styles';

/**
 * Display message to user
 * @param message
 */
export const displayLongMessage = (message: string, color?: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: color,
  });
};

export const displayIndefiniteMessage = (
  message: string,
  color = Colors.WHITE || Colors.RED,
) => {
  Snackbar.show({
    backgroundColor: color,
    textColor: Colors.WHITE,
    text: message,
    duration: Snackbar.LENGTH_INDEFINITE,
  });
};

export const displayAlert = ({
  title,
  message,
}: {
  title: string;
  message?: string;
}) => {
  Alert.alert(title, message, [{text: 'OK', onPress: () => {}}], {
    cancelable: false,
  });
};

export const displayConfirmationDialog = ({
  title,
  message,
  onContinue,
}: {
  title: string;
  message?: string;
  onContinue: (props?: any) => void | Promise<void>;
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Bireke',
        style: 'cancel',
      },
      {text: 'Yego', onPress: () => onContinue()},
    ],
    {cancelable: false},
  );
};

export const asyncDisplayConfirmationDialog = ({
  title,
  message,
  onContinue,
}: {
  title: string;
  message?: string;
  onContinue: (props?: any) => Promise<void>;
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Bireke',
        style: 'cancel',
      },
      {text: 'Yego', onPress: () => onContinue()},
    ],
    {cancelable: false},
  );
};
