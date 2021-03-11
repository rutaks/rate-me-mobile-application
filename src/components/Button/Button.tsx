import React from 'react';
import PropTypes from 'prop-types';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import {styles} from './Button.styles';
import {ButtonStyle} from '../../enums';
import {Colors} from '../../styles';

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
      case ButtonStyle.DANGER:
        return styles.buttonDanger;
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

  const buttonRipple = (btnTextStyle: ButtonStyle) => {
    switch (btnTextStyle) {
      case ButtonStyle.PRIMARY:
        return {color: Colors.WHITE};
      case ButtonStyle.SECONDARY:
        return {color: Colors.DARK_GRAY};
      case ButtonStyle.DANGER:
        return {color: Colors.DARK_GRAY};
      case ButtonStyle.DEFAULT:
        return {color: Colors.DARK_GRAY};
      default:
        break;
    }
  };

  return (
    <Pressable
      disabled={isLoading}
      android_ripple={buttonRipple(type)}
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
    </Pressable>
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
