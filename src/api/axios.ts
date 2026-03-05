import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7096',
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request made with:', config)
    return config // Must return the config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response)
    return response // Must return the response
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default axiosInstance
