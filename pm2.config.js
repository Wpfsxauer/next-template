"use strict";

const serverName = "fe-novadax-faq";

module.exports = {
  apps: [
    {
      name: serverName,
      script: "./server.js",
      exec_mode: "cluster",
      instances: -1,
      kill_timeout: 3000,
      merge_logs: true,
      max_memory_restart: "1024M",
      log_data_format: "YYYY-MM-DD HH:mm Z",
      log_file: `/data/logs/nodejs/${serverName}/pm2/${serverName}.log`,
      error_file: `/data/logs/nodejs/${serverName}/pm2/${serverName}-err.log`,
      out_file: `/data/logs/nodejs/${serverName}/pm2/${serverName}-out.log`,
      pid_file: `/data/logs/nodejs/${serverName}/pm2/${serverName}.pid`,
      env: {
        NODE_ENV: "development",
        NODE_API_PREFIX: "http://www.novadax.com/suporte",
      },
      env_beta: {
        NODE_ENV: "beta",
        NODE_API_PREFIX: "https://beta-www.novadax.com/suporte",
      },
      env_production: {
        NODE_ENV: "production",
        NODE_API_PREFIX: "https://www.novadax.com/suporte",
      },
      env_stage01: {
        NODE_ENV: "stage01",
        NODE_API_PREFIX: "https://stage01-www.novadax.com/suporte",
      },
      env_stage02: {
        NODE_ENV: "stage02",
        NODE_API_PREFIX: "https://stage02-www.novadax.com/suporte",
      },
      env_stage03: {
        NODE_ENV: "stage03",
        NODE_API_PREFIX: "https://stage03-www.novadax.com/suporte",
      },
      env_stage04: {
        NODE_ENV: "stage04",
        NODE_API_PREFIX: "https://stage04-www.novadax.com/suporte",
      },
      env_stage05: {
        NODE_ENV: "stage05",
        NODE_API_PREFIX: "https://stage05-www.novadax.com/suporte",
      },
    },
  ],
};
