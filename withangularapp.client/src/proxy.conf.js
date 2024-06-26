const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7244';

const PROXY_CONFIG = [
  {
    context: [
      '/api'
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    loglevel: 'debug'
  },
  {
    context: [
      '/hub'
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    ws: true,
    loglevel: 'debug'
  }
]

module.exports = PROXY_CONFIG;
