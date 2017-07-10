import appConfig from './../../app.config.js'

export default {
  getBaseApi (segment) {
    return (process.env.NODE_ENV === 'development' ? appConfig.baseUrlGoApiLocal : appConfig.baseUrlGoApi).concat(segment)
  }
}
