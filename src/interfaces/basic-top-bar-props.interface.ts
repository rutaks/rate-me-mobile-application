import {TouchableWithoutFeedbackProps} from 'react-native';

export interface BasicTopBarProps extends TouchableWithoutFeedbackProps {
  /**
   * Icon type displayed on the left side of component
   */
  icon?: string | any;
  /**
   * Text displayed inside the component
   */
  text?: string;

  /**
   * Icon for the button displayed on the right side
   * of the nav bar
   */
  rightButtonIcon?: string;

  /**
   * Component to be displayed on the navbar
   */
  component?: React.ReactNode;

  /**
   * Action on right sided button
   */
  rightButtonAction?: () => void;

  /**
   * If bar should display gradient
   */
  bottomGradient?: true | false;
}
