import IKTRequest from './request'
// import { BASE_URL } from './request/config'
import Cookies from 'js-cookie'

const iktRequest = new IKTRequest({
  baseURL: '/v1',
  timeout: 60000,
  interceptors: {
    requestInterceptor(config) {
      const csrfToken = Cookies.get('csrftoken')
      if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken
      }
      return config
    }
  }
})

export default iktRequest
