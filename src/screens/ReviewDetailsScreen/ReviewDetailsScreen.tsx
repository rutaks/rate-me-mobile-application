import React, {useState} from 'react';
import {SafeAreaView} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar, BasicTopBar} from '../../components';
import {styles} from './ReviewDetailsScreen.styles';
import {Colors, Dimensions, Typography} from '../../styles';

/**
 * Function component representing review details screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const ReviewDetailsScreen = () => {
  const [noStars] = useState(1);

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <BasicTopBar icon="arrow-back" />
        <View style={styles.content}>
          <Avatar
            imageStyles={styles.avatar}
            source={require('../../../assets/images/avatar.png')}
          />
          <Text style={styles.reviewerName}>Yves Honore Bisemage</Text>
          <Text
            style={{...Typography.body, paddingBottom: Dimensions.SIZE_XS / 2}}>
            Awesomity Lab
          </Text>
          <View style={styles.starsRow}>
            <Text style={styles.noStarsText}>{noStars + 1}</Text>
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
                name={noStars >= i ? 'star' : 'star-border'}
                size={Dimensions.FONT_SIZE_XL * 1.3}
                color={Colors.BLACK}
              />
            ))}
          </View>
          <Text style={styles.reviewText}>
            Poor service, he took long to give our order, very unprofessional.
            He even used unclean water to clean our cups, definitely not coming
            back
          </Text>
          <Text style={styles.reviewDate}>14 Feb 2020</Text>
          <Text style={styles.reviewReceivedByText}>
            Review received by The Manager
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewDetailsScreen;
