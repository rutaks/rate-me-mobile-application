import {useCallback} from 'react';
import ApiRequestType from '../../enums/api-request-type.enum';
import useMutation from '../useMutation';

/**
 * Hook that login user's password
 * @author Yves Honore
 * @version 1.0
 */
export const useSignUp = () => {
  const {handleRequest, ...props} = useMutation({});

  const sendRequest = useCallback(
    async (reqBody: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      gender: string;
    }) => {
      console.log('reqBody');
      console.log(reqBody);

      return await handleRequest({
        url: '/api/auth/sign-up',
        requestType: ApiRequestType.POST,
        data: reqBody,
      });
    },
    [handleRequest],
  );

  return {
    sendRequest,
    ...props,
  };
};

export default useSignUp;
