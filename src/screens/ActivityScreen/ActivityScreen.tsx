import React, {useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {ActivityHeader, BasicTopBar, ReviewListItem} from '../../components';
import useGetReviews from '../../hooks/useGetReviews';
import useHandleState from '../../hooks/useHandleState';
import {Colors} from '../../styles';
import {decodeAccessToken} from '../../utils/jwt.util';
import {displayLongMessage} from '../../utils/prompts.util';
import {styles} from './ActivityScreen.styles';

/**
 * Function component representing activity screen
 * @param props
 * @author Yves Honore Bisemage
 * @version 1.0
 */
const ActivityScreen = () => {
  const [reviews, setReviews] = useState<any[]>();
  const [reviewerId, setReviewerId] = useState<string>('');
  const getReviewsHook = useGetReviews();
  useEffect(() => {
    if (reviewerId) {
      getReviewsHook.sendRequest(reviewerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewerId]);

  useEffect(() => {
    const setId = async () => {
      const decodedToken: any = await decodeAccessToken();
      setReviewerId(decodedToken?.user_id);
    };
    setId();
  }, []);

  useHandleState(getReviewsHook, {
    onSuccess: () => {
      const reviewArr = getReviewsHook.successResponse.payload;
      setReviews(reviewArr);
    },
    onError: () => {
      displayLongMessage(`Could not get data Error: ${getReviewsHook.error}`);
    },
    onLoading: () => {},
  });

  if (!reviewerId || getReviewsHook.isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }
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
