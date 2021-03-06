import {NavigationProp, Route} from '@react-navigation/native';
import React, {Fragment, useState} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Button} from '../../components';
import {routingConfig} from '../../config/routing-config';
import {styles} from './SendReviewScreen.styles';
import {Colors, Dimensions, Typography} from '../../styles';
import useGetReviewById from '../../hooks/useGetReviewById';
import useSubmitReview from '../../hooks/useSubmitReview';
import {displayLongMessage} from '../../utils/prompts.util';

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
  route: Route<any, any>;
}) => {
  const getReviewByIdHook = useGetReviewById();
  const submitReviewHook = useSubmitReview();
  const [personToReview] = useState<{
    email?: string;
    gender?: string;
    id?: string;
    names?: string;
    organisation?: {name: string};
    profilePic?: string;
    rating?: number;
  }>({});
  const [noStars, setNoStars] = useState(0);

  const navigateToGiveList = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Activity);
    });
  };

  return (
    <SafeAreaView style={styles.fill}>
      {getReviewByIdHook.isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.fill}>
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
              source={
                personToReview.profilePic
                  ? {uri: personToReview.profilePic}
                  : require('../../../assets/images/avatar.png')
              }
            />
            <Text style={styles.reviewerName}>{personToReview?.names}</Text>
            <Text
              style={{
                ...Typography.body,
                paddingBottom: Dimensions.SIZE_XS / 2,
              }}>
              {personToReview?.organisation?.name}
            </Text>
            <View style={styles.starsRow}>
              <Text style={styles.noStarsText}>
                {personToReview?.rating || 0}
              </Text>
              <MaterialIcons
                style={{paddingTop: Dimensions.SIZE_XS}}
                name={'star'}
                size={Dimensions.FONT_SIZE_L}
                color="#666"
              />
            </View>
            <View style={styles.starRatingArea}>
              {[...Array(5)].map((_, i) => (
                <TouchableOpacity key={i} onPress={() => setNoStars(i)}>
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
            <Formik
              initialValues={{description: '', plate: ''}}
              validationSchema={Yup.object().shape({
                description: Yup.string().required('Description is required'),
              })}
              onSubmit={(_) => {
                displayLongMessage('Review was added');
                navigateToGiveList();
              }}>
              {(formikProps) => {
                return (
                  <Fragment>
                    <TextInput
                      style={styles.reviewTextArea}
                      placeholder="240 Characters"
                      textAlignVertical={'top'}
                      multiline={true}
                      numberOfLines={7}
                      onChangeText={formikProps.handleChange('description')}
                      onSubmitEditing={() =>
                        formikProps.setFieldTouched('description')
                      }
                    />
                    <TextInput
                      style={styles.reviewTextArea}
                      placeholder="Plate No."
                      textAlignVertical={'top'}
                      multiline={true}
                      numberOfLines={1}
                      onChangeText={formikProps.handleChange('plate')}
                      onSubmitEditing={() =>
                        formikProps.setFieldTouched('plate')
                      }
                    />
                    <Text style={styles.errorLabel}>
                      {formikProps.errors.plate}
                    </Text>
                    <Button
                      isLoading={submitReviewHook.isLoading}
                      text="REVIEW"
                      onClick={() => {
                        formikProps.handleSubmit();
                      }}
                    />
                  </Fragment>
                );
              }}
            </Formik>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SendReviewScreen;
