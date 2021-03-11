import React from 'react';
import {ScrollView, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {ActivityHeader, BasicTopBar, ReviewListItem} from '../../components';
import {styles} from './ActivityScreen.styles';

const reviews = [
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
  {
    name: 'Yves Honore Bisemage',
    place: 'Awesomity Lab',
    noStars: 4,
    reviewDate: new Date(),
  },
];

/**
 * Function component representing activity screen
 * @param props
 * @author Awesomity Lab
 * @version 1.0
 */
const ActivityScreen = () => {
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
        <FlatList
          ListHeaderComponent={<ActivityHeader />}
          data={reviews}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({item}: {item: any; index: number}) => {
            return <ReviewListItem review={item} />;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;
