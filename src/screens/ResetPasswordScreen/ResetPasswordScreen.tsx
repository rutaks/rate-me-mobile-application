import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {styles} from './ResetPasswordScreen.styles';
import {NavigationProp} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
/**
 * Function component representing Forgot password screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ResetPasswordScreen = ({
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
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>Login to review</Text>
          <Fragment>
            <FormTextInput placeholder="New password" secureTextEntry={true} />
            <FormTextInput
              placeholder="retype password"
              secureTextEntry={true}
            />
            <Button
              text="SUBMIT"
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

export default ResetPasswordScreen;
