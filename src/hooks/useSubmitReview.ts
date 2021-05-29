import {useCallback} from 'react';
import ApiRequestType from '../enums/api-request-type.enum';
import useMutation from './useMutation';

/**
 * Hook that login user's password
 * @author Yves Honore
 * @version 1.0
 */
export const useSubmitReview = () => {
  const {handleRequest, ...props} = useMutation({});

  const sendRequest = useCallback(
    async (id: string, data: any) => {
      console.log('id');
      console.log(id);
      console.log('data');
      console.log(data);

      return await handleRequest({
        url: `/api/reviewers/${id}/reviews`,
        requestType: ApiRequestType.PATCH,
        data,
      });
    },
    [handleRequest],
  );

  return {
    sendRequest,
    ...props,
  };
};

export default useSubmitReview;
