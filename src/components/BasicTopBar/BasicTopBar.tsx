import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './BasicTopBar.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {BasicTopBarProps} from '../../interfaces/basic-top-bar-props.interface';
import {displayAlert} from '../../utils/prompts.util';

/**
 * Functional component representing a navigation top bar
 * @author Yves Honore Bisemage
 * @since version 1.0
 */
const BasicTopBar = (props: BasicTopBarProps) => {
  const navigation = useNavigation();
  return (
    <View elevation={5} style={styles.container}>
      <View style={styles.leftArea}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() =>
            requestAnimationFrame(() => {
              navigation.goBack();
            })
          }>
          <MaterialIcons name={props.icon} size={19} color="#666" />
        </TouchableOpacity>
        <View>{props?.component && props.component}</View>
      </View>
      {props.rightButtonIcon && (
        <TouchableOpacity
          style={{...styles.iconStyle, ...styles.rightArea}}
          // onPress={() => {
          //   if (props.rightButtonAction) {
          //     props.rightButtonAction();
          //   }
          // }}
          onPress={() => {
            displayAlert({
              title: "Wasn't me",
              message:
                'The screen for this feature was not provided by the owner :)',
            });
          }}>
          <MaterialIcons name={props.rightButtonIcon} size={19} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BasicTopBar;
