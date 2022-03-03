import React, {Fragment} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {styles} from './LoginScreen.styles';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
import {useApi} from '../../context/Api';
import useLogin from '../../hooks/auth/useLogin';
import useHandleState from '../../hooks/useHandleState';
import {setAccessToken} from '../../utils/token-storage.util';
import {displayLongMessage} from '../../utils/prompts.util';
import {hasError} from '../../utils/formik.util';

/**
 * Function component representing Login screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const LoginScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const api: any = useApi(); // api context value
  const loginHook = useLogin();
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

  useHandleState(loginHook, {
    onSuccess: () => {
      const {token} = loginHook.successResponse.payload;
      setAccessToken(token).then((accessToken) => {
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        displayLongMessage('Logged in successfully');
        navigateToHome();
      });
    },
    onError: () => {
      displayLongMessage(`Could not login Error: ${loginHook.error}`);
    },
    onLoading: () => {},
  });

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.fill}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>Login to review</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={Yup.string().required('Email is required')}
            onSubmit={(values) => {
              loginHook.sendRequest(values);
            }}>
            {(formikProps) => {
              return (
                <Fragment>
                  <FormTextInput
                    placeholder="Email"
                    keyboardType={'email-address'}
                    error={
                      hasError(
                        formikProps.touched,
                        formikProps.errors,
                        'email',
                      ) && formikProps.errors.email
                    }
                    onChangeText={formikProps.handleChange('email')}
                    onSubmitEditing={() => formikProps.setFieldTouched('email')}
                  />
                  <FormTextInput
                    placeholder="*********"
                    secureTextEntry={true}
                    error={
                      hasError(
                        formikProps.touched,
                        formikProps.errors,
                        'password',
                      ) && formikProps.errors.password
                    }
                    onChangeText={formikProps.handleChange('password')}
                    onSubmitEditing={() =>
                      formikProps.setFieldTouched('password')
                    }
                  />
                  <Button
                    text="LOGIN"
                    isLoading={loginHook.isLoading}
                    type={ButtonStyle.PRIMARY}
                    onClick={() => {
                      navigateToHome();
                    }}
                  />
                  {/* <Button
                    text="Forgot Password?"
                    type={ButtonStyle.DEFAULT}
                    onClick={navigateToForgotPassword}
                  /> */}
                  <Button
                    text="CREATE ACCOUNT"
                    type={ButtonStyle.SECONDARY}
                    onClick={navigateToRegister}
                  />
                </Fragment>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

LoginScreen.sharedElements = () => {
  return ['SplashLogin'];
};

export default LoginScreen;
