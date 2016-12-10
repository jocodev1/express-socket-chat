module.exports = {
  prod: {
    allowOrigin: 'http://www.your-production-url-to-front-end.com',
    port: null,
    baseUrl: 'http://www.your-production-url.com'
  },
  dev: {
    allowOrigin: 'http://localhost:1234',
    port: 4000,
    baseUrl: 'http://localhost'
  }
}