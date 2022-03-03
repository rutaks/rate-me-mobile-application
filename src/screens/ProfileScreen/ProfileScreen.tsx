import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Avatar, BasicTopBar, Button, EditProfileRow} from '../../components';
import {routingConfig} from '../../config/routing-config';
import {ButtonStyle} from '../../enums';
import {Dimensions, Typography} from '../../styles';
import {displayLongMessage} from '../../utils/prompts.util';
import {setAccessToken} from '../../utils/token-storage.util';
import {styles} from './ProfileScreen.styles';

/**
 * Function component representing profile screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ProfileScreen = () => {
  const navigation = useNavigation();
  const [profile] = useState<any>({
    profilePic:
      'https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x',
    names: 'Samuel Rutakayile',
    phone: '+250780000000',
    sub: 'A Plain Robot',
  });

  console.log(profile);

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
        <View style={styles.avatarContainer}>
          <Avatar
            imageStyles={styles.avatar}
            source={
              profile.profilePic
                ? {uri: profile.profilePic}
                : require('../../../assets/images/avatar.png')
            }
          />
          <View style={styles.profileInfo}>
            <Text numberOfLines={1} style={styles.name}>
              {profile.names}
            </Text>
            <Text style={{...Typography.caption}}>{profile.sub}</Text>
          </View>
        </View>
        <EditProfileRow
          title={profile.phone || 'No Phone Number'}
          value={profile.phone}
        />
        <EditProfileRow title={profile.names} value="" />
        <View
          style={{
            paddingTop: Dimensions.SIZE_XL,
            paddingLeft: Dimensions.SIZE_L,
            paddingRight: Dimensions.SIZE_XL,
          }}>
          <Button
            type={ButtonStyle.PRIMARY}
            text="LOGOUT"
            onClick={() => {
              setAccessToken('');
              displayLongMessage('Logged out successfully');
              requestAnimationFrame(() => {
                navigation.dispatch(
                  StackActions.replace(routingConfig.navigators.Auth),
                );
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
