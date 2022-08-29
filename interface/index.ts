/*
 * @Date: 2022-06-29 14:25:57
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-08 10:41:25
 * @FilePath: /fe-novadax-faq/interface/index.ts
 * @Description:
 */
export interface listItemFace {
  id: number;
  title: string;
  total?: number;
  updatedAt?: string;
  isTop?: number;
  categoryTitle?: string;
  categoryId?: number;
  seoTitle?: string;
  seoDescription?: string;
  list?: Array<listItemFace>;
}
