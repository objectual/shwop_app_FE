import {create} from 'apisauce';

const api = create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

class ApiSauce {
  async post(URL, BODY, TOKEN, HEADERS) {
    api.setHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      ...HEADERS,
    });

    const response = await api.post(URL, BODY);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async get(URL, TOKEN, HEADERS) {
    api.setHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      ...HEADERS,
    });

    const response = await api.get(URL);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async put(URL, BODY, TOKEN, HEADERS) {
    api.setHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      ...HEADERS,
    });

    const response = await api.put(URL, BODY);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    if (
      response.ok &&
      response.originalError === null &&
      response.problem === null &&
      response.status === 200 &&
      response.data
    ) {
      resolve(response.data);
    } else {
      if (
        !response.ok &&
        response.originalError &&
        response.problem &&
        response.status === 400 &&
        response.data &&
        response.data?.msg
      ) {
        reject(response.data.msg);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'NETWORK_ERROR' &&
        response.status === null
      ) {
        reject(response.problem);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'SERVER_ERROR' &&
        response.status === 500 &&
        response.data &&
        !response.data?.success &&
        response.data?.msg
      ) {
        reject(response.data?.msg);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'SERVER_ERROR' &&
        response.status === 500 &&
        response.data
      ) {
        reject(response.problem);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'CLIENT_ERROR' &&
        response.status === 404 &&
        response.data
      ) {
        reject(response.problem);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'CLIENT_ERROR' &&
        response.status === 409 &&
        response?.data &&
        !response.data?.success &&
        response.data?.msg
      ) {
        reject(response.data?.msg);
      } else if (
        !response.ok &&
        response.originalError &&
        response.problem === 'CLIENT_ERROR' &&
        response.status === 401 &&
        response?.data &&
        !response.data?.success &&
        response.data?.msg
      ) {
        reject(response.data?.msg);
      }
    }
  };
}

export default new ApiSauce();
