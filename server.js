/*
 * @Date: 2022-04-20 13:52:30
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-01 18:13:19
 * @FilePath: /fe-novadax-faq/server.js
 * @Description:
 */
const next = require("next");
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");

const hostname = "localhost";
const port = 3080;
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (dev) {
    const { createProxyMiddleware } = require("http-proxy-middleware");
    
    const targets = {
      beta: "https://beta-www.novadax.com",
      stage01: "http://10.106.8.125:8000/",
      stage02: "http://10.106.8.74:8000/",
      stage03: "http://10.106.10.38:8000/",
      stage04: "http://10.106.9.102:8000/",
      stage05: "http://10.106.11.151:8000/",
    };
    server.use(
      createProxyMiddleware("/api", {
        target: targets.stage02,
        secure: false,
        changeOrigin: true,
      })
    );

    server.use(
      morgan(function (tokens, req, res) {
        const url = tokens.url(req, res);
        const status = tokens.status(req, res);
        if (!url.includes("_next")) {
          const logs = [
            tokens.method(req, res),
            url,
            status,
            tokens["response-time"](req, res),
            "ms",
            tokens.date(req, res, "iso"),
          ];
          if (parseInt(tokens.status(req, res)) !== 200) {
            logs.push(JSON.stringify(req.body));
          }
          return status > 400 ? logs.join(" ").red : logs.join(" ").green;
        }
      })
    );
  }

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
