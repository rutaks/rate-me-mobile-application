import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {styles} from './LoginScreen.styles';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';

/**
 * Function component representing Login screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const LoginScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const navigateToForgotPassword = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.ForgotPassword);
    });
  };

  const navigateToRegister = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Register);
    });
  };

  const navigateToHome = (): any => {
    requestAnimationFrame(() => {
      navigation.dispatch(
        StackActions.replace(routingConfig.navigators.LoggedIn),
      );
    });
  };

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
            <FormTextInput placeholder="*********" secureTextEntry={true} />
            <Button
              text="LOGIN"
              type={ButtonStyle.PRIMARY}
              onClick={() => navigateToHome()}
            />
            <Button
              text="Forgot Password?"
              type={ButtonStyle.DEFAULT}
              onClick={navigateToForgotPassword}
            />
            <Button
              text="CREATE ACCOUNT"
              type={ButtonStyle.SECONDARY}
              onClick={navigateToRegister}
            />
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

LoginScreen.sharedElements = () => {
  return ['SplashLogin'];
};

export default LoginScreen;
