import axios from 'axios';

export const getResource = (URL, TOKEN) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}`, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createResource = (URL, DATA, TOKEN) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL}`, DATA, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateResource = (URL, ID, DATA, TOKEN) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${URL}/${ID}`, DATA, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteResource = (URL, ID, TOKEN) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${URL}/${ID}`, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getResourceById = (URL, ID, TOKEN) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}/${ID}`, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
