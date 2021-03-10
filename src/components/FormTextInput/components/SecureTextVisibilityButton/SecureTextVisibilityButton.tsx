import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SecureTextVisibilityButton = ({
  isTextHidden,
  secureTextEntry,
  setIsTextHidden,
  style,
}) => {
  if (!secureTextEntry) {
    return null;
  }
  return (
    <TouchableOpacity
      style={style}
      onPress={() => setIsTextHidden((v: boolean) => !v)}>
      <MaterialIcons
        name={isTextHidden ? 'visibility-off' : 'visibility'}
        size={19}
        color="#666"
      />
    </TouchableOpacity>
  );
};

export default SecureTextVisibilityButton;
