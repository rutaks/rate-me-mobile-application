import React, {Fragment} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Button, FormTextInput} from '../../components';
import {styles} from './CreateAccountScreen.styles';
import {NavigationProp} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
import {hasError} from '../../utils/formik.util';
import useSignUp from '../../hooks/auth/useSignUp';
import useHandleState from '../../hooks/useHandleState';
import {displayLongMessage} from '../../utils/prompts.util';
/**
 * Function component representing Forgot password screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const CreateAccountScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const signUpHook = useSignUp();
  const navigateToLogin = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.Login);
    });
  };

  useHandleState(signUpHook, {
    onSuccess: () => {
      // const {token} = signUpHook.successResponse.payload;
      displayLongMessage('Sign up successful');
      navigateToLogin();
    },
    onError: () => {
      displayLongMessage(`Could not Sign up Error: ${signUpHook.error}`);
    },
    onLoading: () => {},
  });

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <View style={styles.container}>
          <Text style={styles.heading}>Create new account</Text>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().required('Email is required'),
              phone: Yup.number().required('Phone is required'),
              firstName: Yup.string().required('First name is required'),
              lastName: Yup.string().required('Last name is required'),
              password: Yup.string().required('Password is required'),
            })}
            onSubmit={(values) => {
              signUpHook.sendRequest(values);
            }}>
            {(formikProps) => {
              return (
                <Fragment>
                  <FormTextInput
                    placeholder="First Name"
                    keyboardType={'default'}
                    error={
                      hasError(
                        formikProps.touched,
                        formikProps.errors,
                        'firstName',
                      ) && formikProps.errors.firstName
                    }
                    onChangeText={formikProps.handleChange('firstName')}
                    onSubmitEditing={() =>
                      formikProps.setFieldTouched('firstName')
                    }
                  />
                  <FormTextInput
                    placeholder="Last Name"
                    keyboardType={'default'}
                    error={
                      hasError(
                        formikProps.touched,
                        formikProps.errors,
                        'lastName',
                      ) && formikProps.errors.lastName
                    }
                    onChangeText={formikProps.handleChange('lastName')}
                    onSubmitEditing={() =>
                      formikProps.setFieldTouched('lastName')
                    }
                  />
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
                    placeholder="Phone"
                    keyboardType={'number-pad'}
                    error={
                      hasError(
                        formikProps.touched,
                        formikProps.errors,
                        'phone',
                      ) && formikProps.errors.phone
                    }
                    onChangeText={formikProps.handleChange('phone')}
                    onSubmitEditing={() => formikProps.setFieldTouched('phone')}
                  />
                  <FormTextInput
                    placeholder="Password"
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
                    isLoading={signUpHook.isLoading}
                    text="CREATE ACCOUNT"
                    type={ButtonStyle.PRIMARY}
                    onClick={() => {
                      formikProps.handleSubmit();
                    }}
                  />
                  <Button
                    text="Back to login"
                    type={ButtonStyle.DEFAULT}
                    onClick={navigateToLogin}
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

CreateAccountScreen.sharedElements = () => {
  return ['SplashLogin'];
};

export default CreateAccountScreen;
