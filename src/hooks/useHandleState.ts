import {useEffect} from 'react';

const useHandleState = (
  {isError, isLoading, isSuccess}: any,
  {onSuccess = () => {}, onError = () => {}, onLoading = () => {}},
) => {
  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      onError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (isLoading) {
      onLoading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};

export default useHandleState;
