export const fetchWithAuth = async (input, params = {}) => {

  const token = typeof window !== 'undefined' ? 'token_token_00000000000' : null;

  params.headers = {
    ...params.headers,
    'Authorization': `Bearer ${token}`,
  };

console.log('FFFFFFFFFFFF')

  return fetch(input, init);

};