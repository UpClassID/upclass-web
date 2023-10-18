import axios, { isAxiosError } from 'axios'
import { getCookie, setCookie } from 'cookies-next'

const baseURL = 'http://localhost:3000'

const unauthorizedClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    
    withCredentials: true,
  })
  
  const authorizedClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
  
  authorizedClient.interceptors.request.use(async (req) => {
    const token = getCookie('access_token')
    if (token) {
      if (req.headers) {
        req.headers.Authorization = `Bearer ${token}`
        return req
      }
    }
  
    return req
  })

export { unauthorizedClient, authorizedClient }
