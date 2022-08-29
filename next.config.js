/*
 * @Date: 2022-06-29 19:40:40
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:30:12
 * @FilePath: /next-template/next.config.js
 * @Description:
 */
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withTM = require("next-transpile-modules")(["antd"]);

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["static.novadax.com"],
  },
  // basePath: "/suporte",
};

module.exports = withTM(nextConfig);
