import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar, BasicTopBar} from '../../components';
import {styles} from './ReviewDetailsScreen.styles';
import {Colors, Dimensions, Typography} from '../../styles';
import {Route} from '@react-navigation/native';

/**
 * Function component representing review details screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ReviewDetailsScreen = ({route}: {route: Route<any, any>}) => {
  const {review}: any = route?.params;

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <BasicTopBar icon="arrow-back" />
        <View style={styles.content}>
          <Avatar imageStyles={styles.avatar} source={review.profilePic} />
          <Text style={styles.reviewerName}>{review.names}</Text>
          <Text
            style={{...Typography.body, paddingBottom: Dimensions.SIZE_XS / 2}}>
            Yves Honore Bisemage
          </Text>
          <View style={styles.starsRow}>
            <Text style={styles.noStarsText}>{review.rating}</Text>
            <MaterialIcons
              style={{paddingTop: Dimensions.SIZE_XS}}
              name={'star'}
              size={Dimensions.FONT_SIZE_L}
              color="#666"
            />
          </View>
          <Text style={styles.reviewHeading}>My Review</Text>
          <View style={styles.starRatingArea}>
            {[...Array(5)].map((_, i) => (
              <MaterialIcons
                key={i}
                style={{paddingRight: Dimensions.SIZE_XL}}
                name={review.rating > i ? 'star' : 'star-border'}
                size={Dimensions.FONT_SIZE_XL * 1.3}
                color={Colors.BLACK}
              />
            ))}
          </View>
          <Text style={styles.reviewText}>{"He's a good guy"}</Text>
          <Text style={styles.reviewDate}>{'20.02.2022'}</Text>
          <Text style={styles.reviewReceivedByText}>
            Review received by {review?.names}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewDetailsScreen;
