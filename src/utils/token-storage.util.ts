import SInfo from 'react-native-sensitive-info';

export const getAccessToken = async (): Promise<string> => {
  return await SInfo.getItem('ACCESS_TOKEN', {});
};

export const setAccessToken = async (token: string) => {
  await SInfo.setItem('ACCESS_TOKEN', token, {});
};
