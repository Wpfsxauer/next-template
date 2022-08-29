/*
 * @Date: 2022-06-29 15:20:26
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:19:31
 * @FilePath: /next-template/components/home/index.tsx
 * @Description:
 */
import styles from "./index.module.scss";

import { useEffect } from "react";
import { message } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import type { NextPage } from "next";

import Seo from "@/widget/Seo";

const Home: NextPage = () => {
  const router = useRouter();

  const { t } = useTranslation("common");

  useEffect(() => {
    console.log();
    message.success(t("success"));
  }, []);

  return (
    <div className={styles.homeWrap}>
      <Seo />
    </div>
  );
};

export default Home;
