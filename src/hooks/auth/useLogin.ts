import {useCallback} from 'react';
import ApiRequestType from '../../enums/api-request-type.enum';
import useMutation from '../useMutation';

/**
 * Hook that login user's password
 * @author Yves Honore
 * @version 1.0
 */
export const useLogin = () => {
  const {handleRequest, ...props} = useMutation({});

  const sendRequest = useCallback(
    async (reqBody: {email: string; password: string}) => {
      return await handleRequest({
        url: '/api/auth/login',
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

export default useLogin;
