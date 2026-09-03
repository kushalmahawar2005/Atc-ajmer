// PM2 process file for the Hostinger VPS.
// Deploy flow: npm ci && npm run build, then `pm2 start ecosystem.config.js`.
module.exports = {
  apps: [
    {
      name: "springboard",
      script: ".next/standalone/server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },
      max_memory_restart: "512M",
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      time: true,
    },
  ],
};
