import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {styles} from './CreateAccountScreen.styles';
import {NavigationProp} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
/**
 * Function component representing Forgot password screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const CreateAccountScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const navigateToLogin = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Login);
    });
  };

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <View style={styles.container}>
          <Text style={styles.heading}>Create new account</Text>
          <Fragment>
            <FormTextInput placeholder="Name" keyboardType={'default'} />
            <FormTextInput placeholder="Email" keyboardType={'email-address'} />
            <FormTextInput placeholder="Phone" keyboardType={'number-pad'} />
            <FormTextInput placeholder="Password" secureTextEntry={true} />
            <Button
              text="CREATE ACCOUNT"
              type={ButtonStyle.PRIMARY}
              onClick={() => {}}
            />
            <Button
              text="Back to login"
              type={ButtonStyle.DEFAULT}
              onClick={navigateToLogin}
            />
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

CreateAccountScreen.sharedElements = () => {
  return ['SplashLogin'];
};

export default CreateAccountScreen;
