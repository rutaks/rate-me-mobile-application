import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../Avatar';
import {styles} from './ReviewListItem.styles';
import {useNavigation} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';

const ReviewListItem = (props: {review: any}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(routingConfig.screens.ReviewDetails)}>
      <View style={styles.leftArea}>
        <Avatar
          imageStyles={styles.avatar}
          source={require('../../../assets/images/avatar.png')}
        />
      </View>
      <View style={styles.middleArea}>
        <Text style={styles.reviewerName}>{props.review.name}</Text>
        <Text style={{...Typography.caption}}>{props.review.place}</Text>
        <View style={styles.reviewStarsArea}>
          <View style={styles.starsRow}>
            <Text style={styles.noStarsText}>{props.review.noStars}</Text>
            <MaterialIcons
              style={{paddingTop: Dimensions.SIZE_XS}}
              name={'star'}
              size={Dimensions.FONT_SIZE_L}
              color="#666"
            />
          </View>
          <Text style={styles.reviewDate}>
            {props?.review?.reviewDate?.toDateString()}
          </Text>
        </View>
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

export default ReviewListItem;
