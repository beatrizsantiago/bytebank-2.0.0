import { decode } from 'js-base64';

interface UserData {
  user_id: string;
  user_name: string;
  email: string;
};

class LocalStorage {
  setToken(token:string) {
    localStorage.setItem('token', token);
  };

  clearToken() {
    localStorage.removeItem('token');
  };

  getUserInfoFromToken():UserData {
    const token = localStorage.getItem('token') as string;

    const data = token.split('.')[1];
    const userInfo = JSON.parse(decode(data));

    return userInfo;
  };
};

export default LocalStorage;
