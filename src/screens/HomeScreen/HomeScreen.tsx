import {NavigationProp} from '@react-navigation/native';
import React, {Fragment, useRef} from 'react';
import BarcodeMask from 'react-native-barcode-mask';
import {ScrollView, Image, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SafeAreaView} from 'react-navigation';
import {BasicTopBar} from '../../components';
import {routingConfig} from '../../config/routing-config';
import {styles} from './HomeScreen.styles';
import {Colors, Typography} from '../../styles';

/**
 * Function component representing Home screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const HomeScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  const navigateToGiveReview = (): any => {
    requestAnimationFrame(() => {
      navigation.navigate(routingConfig.screens.SendReview);
    });
  };

  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView contentContainerStyle={styles.fill}>
        <BasicTopBar
          component={
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
            />
          }
          rightButtonAction={() => {}}
          rightButtonIcon="info-outline"
        />
        <RNCamera
          style={styles.cameraView}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={() => {
            console.log('RECEIVED');
            navigateToGiveReview();
          }}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({status}) => {
            //Show pending view while camera is not yet ready
            if (status !== 'READY') {
              return (
                <View>
                  <Text>Getting ready</Text>
                </View>
              );
            }

            return (
              <Fragment>
                <BarcodeMask
                  edgeBorderWidth={1}
                  width={370}
                  height={246.7}
                  showAnimatedLine={false}
                />
                <View style={styles.cameraTopArea}>
                  <Text style={{...Typography.body, color: Colors.WHITE}}>
                    Scan Reviewee's QR Code
                  </Text>
                </View>
              </Fragment>
            );
          }}
        </RNCamera>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
