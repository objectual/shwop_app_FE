export const BASE_URL_WITHOUT_API = 'https://50d07e0463ca.ngrok.io/'; // Public
export const BASE_URL = 'https://50d07e0463ca.ngrok.io/api/'; // Public
// export const BASE_URL_WITHOUT_API = 'http://192.168.8.110:4000/'; // Local
// export const BASE_URL = 'http://192.168.8.110:4000/api/'; // Local

export const LOGIN = `${BASE_URL}users/login`;
export const REGISTER = `${BASE_URL}users/register`;
export const VERIFY_OTP = `${BASE_URL}users/verify`;
export const SOCIAL_REGISTER = `${BASE_URL}users/social/register`;
export const CATEGORIES = `${BASE_URL}category/getAll`;
export const GOOGLE = `${BASE_URL_WITHOUT_API}auth/google`;
export const FACEBOOK = `${BASE_URL_WITHOUT_API}auth/facebook`;
export const PRODUCT = (id = '') => `${BASE_URL}product/${id}`;
export const MY_PRODUCT = `${BASE_URL}product/me`;
export const REVIEW = `${BASE_URL}review`;
export const IS_EXISTS = `${BASE_URL}users/isexists`;
export const LOGOUT = `${BASE_URL}users/logout`;
export const FOLLOWING_REVIEWS = (categoryId = '') =>
  `${BASE_URL}review/following?search=${categoryId}`;
export const FOR_YOU_REVIEWS = (categoryId = '') =>
  `${BASE_URL}review/foryou?search=${categoryId}`;
export const RETURN_POLICY = `${BASE_URL}users/returnPolicies`;
export const TERM_CONDITION = `${BASE_URL}/admin/tnc`;
