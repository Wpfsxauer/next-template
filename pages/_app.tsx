/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:15:12
 * @FilePath: /next-template/pages/_app.tsx
 * @Description:
 */
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import Layouts from "@/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default appWithTranslation(MyApp);
