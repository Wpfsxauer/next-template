/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-07-28 14:16:54
 * @FilePath: /fe-novadax-faq/layouts/header/index.tsx
 * @Description:
 */
import styles from "../layout.module.scss";

import Image from "next/image";

import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.header}>
        <Image
          src="https://static.novadax.com/media/logo.png"
          alt="Landscape picture"
          width={100}
          height={30}
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default Header;
