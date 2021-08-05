export const BASE_URL_WITHOUT_API = 'https://50d07e0463ca.ngrok.io/'; // Public
export const BASE_URL = 'https://50d07e0463ca.ngrok.io/api/'; // Public
// export const BASE_URL_WITHOUT_API = 'http://192.168.18.248:4000/'; // Local
// export const BASE_URL = 'http://192.168.18.248:4000/api/'; // Local

export const LOGIN = `${BASE_URL}users/login`;
export const REGISTER = `${BASE_URL}users/register`;
export const VERIFY_OTP = `${BASE_URL}users/verify`;
export const SOCIAL_REGISTER = `${BASE_URL}users/social/register`;
export const CATEGORIES = `${BASE_URL}category/getAll`;
export const GOOGLE = `${BASE_URL_WITHOUT_API}auth/google`;
export const FACEBOOK = `${BASE_URL_WITHOUT_API}auth/facebook`;
export const PRODUCT = `${BASE_URL}product`;
