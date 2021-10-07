module.exports = {
  apps: [
    {
      name: 'estimating-ui',
      script: './scripts/start.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}