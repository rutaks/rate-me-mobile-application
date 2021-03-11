import {NavigationProp, StackActions} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {BasicTopBar, Button} from '../../components';
import {routingConfig} from '../../config/routing-config';
import {styles} from './HomeScreen.styles';

/**
 * Function component representing Home screen
 * @param props
 * @author Awesomity Lab
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
        <Button text="Give review" onClick={navigateToGiveReview} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
