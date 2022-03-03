import React, {useState} from 'react';
import {Image, FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {ActivityHeader, BasicTopBar, ReviewListItem} from '../../components';
import useGetReviews from '../../hooks/useGetReviews';
import {styles} from './ActivityScreen.styles';

/**
 * Function component representing activity screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ActivityScreen = () => {
  const [reviews] = useState<any[]>([
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '1',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      phoneNo: '07800000000',
      rating: 0,
      reviewDate: '12.02.2022',
    },
    {
      id: '2',
      phoneNo: '07800000001',
      profilePic:
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      names: 'Sam Rutakay',
      rating: 4,
      reviewDate: '12.02.2022',
    },
  ]);
  const [reviewerId] = useState<string>('');
  const getReviewsHook = useGetReviews();

  return (
    <SafeAreaView style={styles.fill}>
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
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              getReviewsHook.sendRequest(reviewerId);
            }}
          />
        }
        ListHeaderComponent={
          <ActivityHeader itemCount={reviews?.length || 0} />
        }
        data={reviews}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({item}: {item: any; index: number}) => {
          return <ReviewListItem review={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ActivityScreen;
