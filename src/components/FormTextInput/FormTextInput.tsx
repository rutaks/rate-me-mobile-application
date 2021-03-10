import React from 'react';
import {Text, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {styles} from './FormTextInput.styles';
import {FormTextInputProps} from '../../interfaces/form-text-input.props.interface';
// import {SecureTextVisibilityButton} from './components';

const FormTextInput = ({
  icon,
  label,
  onChangeText,
  onSubmitEditing,
  placeholder = '',
  error,
  textContainerStyle,
  ...rest
}: FormTextInputProps) => {
  // const [isTextHidden, setIsTextHidden] = useState(true);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, textContainerStyle]}>
        {icon && (
          <View style={styles.iconStyle}>
            <MaterialIcons name={icon} size={19} color="#666" />
          </View>
        )}
        <TextInput
          {...rest}
          secureTextEntry={rest.secureTextEntry}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          style={styles.input}
          placeholder={placeholder}
        />
        {/* <SecureTextVisibilityButton
          isTextHidden={isTextHidden}
          setIsTextHidden={setIsTextHidden}
          secureTextEntry={rest.secureTextEntry}
          style={styles.iconStyle}
        /> */}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormTextInput;

FormTextInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};
