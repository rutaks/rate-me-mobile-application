import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Dimensions} from '../../styles';
import {styles} from './EditProfileRow.styles';

const EditProfileRow = (props: {title: string; value: string}) => {
  return (
    <TouchableOpacity style={styles.editRow}>
      <View style={styles.editColumn}>
        <Text style={styles.editTitle}>{props.title}</Text>
        <Text style={styles.editContent}>{props.value}</Text>
      </View>
      <View style={styles.rightHint}>
        <MaterialIcons
          name={'arrow-forward-ios'}
          size={Dimensions.FONT_SIZE_L}
          color={Colors.GRAY}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EditProfileRow;
