import {useCallback, useEffect, useState} from 'react';
import {getAccessToken} from '../utils/token-storage.util';

/**
 * Checks if user is save in db
 * performs respective action if user if found or not
 * @param onIsLoggedIn
 * @param onIsNotLoggedIn
 */
export const useIsUserLoggedIn = (
  onIsLoggedIn: () => void,
  onIsNotLoggedIn: () => void,
) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>();

  const isUserLoggedIn = useCallback(async () => {
    const accessToken = await getAccessToken();
    setIsLoggedIn(accessToken === null || accessToken === '');
    accessToken ? onIsLoggedIn() : onIsNotLoggedIn();
  }, [onIsLoggedIn, onIsNotLoggedIn]);

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

  return {isLoggedIn};
};
