/*
 * @Date: 2022-06-28 11:16:35
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:13:29
 * @FilePath: /next-template/layouts/index.tsx
 * @Description:
 */

import styles from "./layout.module.scss";

import React from "react";

import type { NextPage } from "next";

import { GlobalHandle } from "@/store";

import Header from "./header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts: NextPage<LayoutsProps> = ({ children }) => {
  return (
    <GlobalHandle>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </GlobalHandle>
  );
};

export default Layouts;
