import React from 'react';
import PropTypes from 'prop-types';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {styles} from './Button.styles';
import {ButtonStyle} from '../../enums';

/**
 * Function component representing custom button
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const Button = ({
  text,
  type = ButtonStyle.PRIMARY,
  onClick,
  isLoading,
  buttonStyle,
}: {
  text?: string;
  type?: ButtonStyle;
  onClick?: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}) => {
  const getButtonStyle = (btnStyle: ButtonStyle) => {
    switch (btnStyle) {
      case ButtonStyle.PRIMARY:
        return styles.buttonPrimary;
      case ButtonStyle.SECONDARY:
        return styles.buttonSecondary;
      case ButtonStyle.DEFAULT:
        return styles.buttonDefault;
      default:
        return {};
    }
  };

  const buttonTextStyle = (btnTextStyle: ButtonStyle) => {
    switch (btnTextStyle) {
      case ButtonStyle.PRIMARY:
        return styles.textPrimary;
      case ButtonStyle.SECONDARY:
        return styles.textSecondary;
      case ButtonStyle.DANGER:
        return styles.textDanger;
      case ButtonStyle.DEFAULT:
        return styles.buttonDefault;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[
        styles.container,
        getButtonStyle(type),
        isLoading && styles.buttonDisabled,
        buttonStyle,
      ]}
      onPress={onClick}>
      <Text
        style={[
          styles.buttonText,
          buttonTextStyle(type),
          isLoading && styles.buttonTextDisabled,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf([
    ButtonStyle.DEFAULT,
    ButtonStyle.PRIMARY,
    ButtonStyle.SECONDARY,
    ButtonStyle.DANGER,
  ]),
};
