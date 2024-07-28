/**
 * 封装 token 和 contentType
 *
 * @param token
 * @param contentType
 * @returns {{headers: {"Content-Type": string}}}
 */
export const getRequestConfig = ({ token, contentType = 'json' }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  switch (contentType) {
    case 'json':
      headers['Content-Type'] = 'application/json';
      break;
    case 'images':
      headers['Content-Type'] = 'multipart/form-data';
      break;
    default:
      headers['Content-Type'] = 'application/json';
  }

  return { headers };
};