import {useCallback} from 'react';
import ApiRequestType from '../../enums/api-request-type.enum';
import useMutation from '../useMutation';

/**
 * Hook that resets user's password
 * @author Regis Ishimwe
 * @version 1.0
 */
export const useResetPassword = () => {
  const {handleRequest, ...props} = useMutation({});

  const sendRequest = useCallback(
    async ({
      passwordConfirm,
      password,
    }: {
      passwordConfirm: string;
      password: string;
    }) => {
      return await handleRequest({
        url: '/reset',
        requestType: ApiRequestType.POST,
        data: {password, re_enter_password: passwordConfirm},
      });
    },
    [handleRequest],
  );

  return {
    sendRequest,
    ...props,
  };
};

export default useResetPassword;
