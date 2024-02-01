export const useFetch = () => {
  const baseUrl = 'https://metsenatclub.xn--h28h.uz/api/v1'

  const axios = (url, options) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/${url}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        ...options
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => {
          reject(err)
        })
    })
  }

  const get = (url) => {
    return axios(url)
  }

  const post = (url, body) => {
    return axios(url, {
      method: 'POST',
      body
    })
  }

  const put = (url, body) => {
    return axios(url, {
      method: 'PUT',
      body
    })
  }

  const deleteData = (url) => {
    return axios(url, {
      method: 'DELETE'
    })
  }

  return {
    get,
    post,
    put,
    deleteData
  }
}
