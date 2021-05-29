import {getAccessToken} from './token-storage.util';
import jwtDecode from 'jwt-decode';

export const decodeAccessToken = async () => {
  const token = await getAccessToken();
  return jwtDecode(token);
};
