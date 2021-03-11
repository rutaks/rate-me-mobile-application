import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Avatar, BasicTopBar, Button, EditProfileRow} from '../../components';
import {ButtonStyle} from '../../enums';
import {Dimensions, Typography} from '../../styles';
import {styles} from './ProfileScreen.styles';

/**
 * Function component representing profile screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const ProfileScreen = () => {
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
            source={require('../../../assets/images/avatar.png')}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={{...Typography.caption}}>yveshonore14@gmail.com</Text>
          </View>
        </View>
        <EditProfileRow title="Edit Phone Number" value="+250 789 427 561" />
        <EditProfileRow
          title="Edit Display Name"
          value="Yves Honore Bisemage"
        />
        <EditProfileRow
          title="Edit Password"
          value="Edit your current RateMe password"
        />
        <View
          style={{
            paddingTop: Dimensions.SIZE_XL,
            paddingLeft: Dimensions.SIZE_L,
            paddingRight: Dimensions.SIZE_XL,
          }}>
          <Button type={ButtonStyle.DANGER} text="LOGOUT" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
