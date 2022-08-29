/*
 * @Date: 2022-06-29 19:40:40
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:25:14
 * @FilePath: /next-template/pages/index.tsx
 * @Description:
 */

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/home";

import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default HomePage;
