import {ImageSourcePropType} from 'react-native';

export interface AvatarProps {
  /**
   * Image prop containing image uri/location
   */
  source: ImageSourcePropType;
  /**
   * Triggers a desired action when component tapped
   */
  onTap?: () => {};

  /**
   * Additional styles
   */
  imageStyles?: {};
}
