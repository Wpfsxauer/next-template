/*
 * @Date: 2022-06-29 19:40:40
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:12:29
 * @FilePath: /next-template/service/index.ts
 * @Description:
 */
import { httpPost, httpGet } from "novadax-utils";

export const post = (data: { type: string; language: string }) =>
  httpPost(`/api/`, data, {
    "Content-Type": "application/json",
  });

export const get = (data: { type: string; language: string }) =>
  httpGet(`/api/`, data);
