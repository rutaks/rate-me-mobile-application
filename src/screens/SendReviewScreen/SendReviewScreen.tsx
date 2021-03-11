import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Button} from '../../components';
import {routingConfig} from '../../config/routing-config';
import {styles} from './SendReviewScreen.styles';
import {Colors, Dimensions, Typography} from '../../styles';

/**
 * Function component representing Home screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const SendReviewScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const [noStars, setNoStars] = useState(0);
  const navigateToGiveList = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Activity);
    });
  };

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() =>
            requestAnimationFrame(() => {
              navigation.goBack();
            })
          }>
          <MaterialIcons name={'close'} size={28} color="#666" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Avatar
            imageStyles={styles.avatar}
            source={require('../../../assets/images/avatar.png')}
          />
          <Text style={styles.reviewerName}>Yves Honore Bisemage</Text>
          <Text
            style={{...Typography.body, paddingBottom: Dimensions.SIZE_XS / 2}}>
            Yves Honore Bisemage
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
          <View style={styles.starRatingArea}>
            {[...Array(5)].map((_, i) => (
              <TouchableOpacity onPress={() => setNoStars(i)}>
                <MaterialIcons
                  key={i}
                  style={{paddingRight: Dimensions.SIZE_XL * 1.2}}
                  name={noStars >= i ? 'star' : 'star-border'}
                  size={Dimensions.FONT_SIZE_XL * 2}
                  color={Colors.BLACK}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.reviewText}>Review</Text>
          <TextInput
            style={styles.reviewTextArea}
            placeholder="240 Characters"
            textAlignVertical={'top'}
            multiline={true}
            numberOfLines={7}
          />
          <Button text="REVIEW" onClick={navigateToGiveList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendReviewScreen;
