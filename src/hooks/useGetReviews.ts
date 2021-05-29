import {useCallback} from 'react';
import ApiRequestType from '../enums/api-request-type.enum';
import useMutation from './useMutation';

/**
 * Hook that login user's password
 * @author Yves Honore
 * @version 1.0
 */
export const useGetReviews = () => {
  const {handleRequest, ...props} = useMutation({});

  const sendRequest = useCallback(
    async (id: string) => {
      return await handleRequest({
        url: `/api/reviewers/${id}/reviews`,
        requestType: ApiRequestType.GET,
        data: {},
      });
    },
    [handleRequest],
  );

  return {
    sendRequest,
    ...props,
  };
};

export default useGetReviews;
