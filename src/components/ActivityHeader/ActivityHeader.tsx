import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

const ActivityHeader = ({itemCount}: {itemCount: number}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.PRIMARY,
        padding: Dimensions.SIZE_XL * 2,
      }}>
      <Text
        style={{
          ...Typography.title,
          color: Colors.WHITE,
          paddingBottom: Dimensions.SIZE_SM,
        }}>
        My recent reviews({itemCount})
      </Text>
      <Text style={{...Typography.caption, color: Colors.WHITE}}>
        Tap the item to view more details
      </Text>
    </View>
  );
};

export default ActivityHeader;
