import Cookies from 'js-cookie';

export const saveAuthCookie = async (token: string) => {
  Cookies.set('jwtToken', token, {
    // httpOnly: true,
    // sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: 1,
  });
};
