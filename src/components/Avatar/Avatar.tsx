import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {AvatarProps} from '../../interfaces/avatar-props.interface';
import {styles} from './Avatar.styles';
/**
 * Functional component representing an avatar
 * @param props Avatar props
 * @author Awesomity Lab
 * @since version 1.0
 */
const Avatar = ({source, onTap, imageStyles}: AvatarProps) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onTap}
    activeOpacity={0.6}>
    <Image
      source={source}
      style={{
        ...styles.avatarImage,
        ...imageStyles,
      }}
    />
  </TouchableOpacity>
);

export default Avatar;
