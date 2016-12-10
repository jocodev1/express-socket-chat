module.exports = {
  allowOrigin: 'http://localhost:1234',
  prod: {
    port: null,
    baseUrl: 'http://www.your-production-url.com'
  },
  dev: {
    port: 4000,
    baseUrl: 'http://localhost'
  },
  version: 'v1.0'
}