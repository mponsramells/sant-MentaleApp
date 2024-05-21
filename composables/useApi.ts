export function useApi(baseUrl) {
  const request = async ({ url, method = 'GET', body = null, params = {}, headers = {} }) => {
    const { fetch, data, pending, error } = useFetch(baseUrl + url, {
      method: method,
      body: JSON.stringify(body),
      params: params,
      headers: new Headers({
        'Content-Type': 'application/json',
        ...headers
      }),
      onResponse: (response) => {
        if (!response.ok) {
          throw new Error('Erreur de requête: ' + response.status);
        }
      }
    });
    fetch();

    return { data, pending, error };
  };

  return {
    get: (url, params = {}) => request({ url, method: 'GET', params }),
    post: (url, body, params = {}) => request({ url, method: 'POST', body, params }),
    put: (url, body, params = {}) => request({ url, method: 'PUT', body, params }),
    delete: (url, params = {}) => request({ url, method: 'DELETE', params }),
  };
}
