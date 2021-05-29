import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {styles} from './ForgotPasswordScreen.styles';
import {NavigationProp} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
import {displayAlert} from '../../utils/prompts.util';
/**
 * Function component representing Forgot password screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ForgotPasswordScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const navigateToForgotPassword = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Login);
    });
  };

  //   const navigateToLogin = (): any => {
  //     requestAnimationFrame(() => {
  //       navigation.dispatch(StackActions.replace(routingConfig.navigators.Home));
  //     });
  //   };

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>Login to review</Text>
          <Fragment>
            <FormTextInput placeholder="Email" keyboardType={'email-address'} />
            <Button
              text="SUBMIT"
              type={ButtonStyle.PRIMARY}
              onClick={() => {
                displayAlert({
                  title: "Wasn't me",
                  message:
                    'The screen for this feature was not provided by the owner :)',
                });
              }}
            />
            <Button
              text="Back to login"
              type={ButtonStyle.DEFAULT}
              onClick={navigateToForgotPassword}
            />
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

ForgotPasswordScreen.sharedElements = () => {
  return ['SplashLogin'];
};

export default ForgotPasswordScreen;
