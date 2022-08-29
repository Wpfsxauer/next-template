/*
 * @Date: 2022-08-29 15:11:27
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:31:22
 * @FilePath: /next-template/widget/Seo/index.tsx
 * @Description:
 */
import { NextSeo } from "next-seo";

import type { NextPage } from "next";

const Seo: NextPage<{
  title?: string;
  description?: string;
}> = (props) => {
  const { description, title } = props;

  return <NextSeo title={title} description={description} />;
};

export default Seo;
