import {AxiosRequestConfig} from 'axios';
import {useCallback, useState} from 'react';
import {useApi} from '../context/Api';
import ApiRequestType from '../enums/api-request-type.enum';

/**
 * Hook to process api mutations such as POST,DELETE, PUT requests
 * will handle state management of request while request is being made
 * @author Regis Ishimwe
 * @version 1.0
 */
export const useMutation = ({
  defaultLoadingState = false,
}: {
  defaultLoadingState?: boolean;
}) => {
  /** Api request states */
  const api: any = useApi(); // api context value
  const [isError, setIsError] = useState<boolean>(false); // on error hook
  const [error, setError] = useState<[] | any>(); // on error hook
  const [isLoading, setIsLoading] = useState<boolean>(defaultLoadingState); // on loading hook
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // on success hook
  const [successResponse, setSuccessResponse] = useState<any>(false); // on success hook

  /**
   * hook will process api action and
   * handle states according to response
   *
   */
  const handleRequest = useCallback(
    async ({
      url,
      requestType,
      data,
      config,
    }: {
      url: string;
      requestType: ApiRequestType;
      data?: any;
      config?: AxiosRequestConfig;
    }) => {
      // Set request state as started
      setIsLoading(true);
      setError(null);
      setIsError(false);
      setIsSuccess(false);
      try {
        const response = await api[requestType](url, data, config); // process api request async
        // Set request state as ended and successful
        setIsLoading(false);
        setSuccessResponse(response.data || response);
        setIsSuccess(true);
        setIsSuccess(false);
      } catch (e) {
        const apiError = e.response?.data?.message;
        // Set request state as ended and failed

        setError(apiError || e.message || e);
        setIsError(true);
        setIsLoading(false);
      }
    },
    [api],
  );

  return {
    isLoading,
    error,
    isError,
    handleRequest,
    isSuccess,
    successResponse,
  };
};

export default useMutation;
