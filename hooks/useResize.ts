/*
 * @Date: 2022-07-06 15:25:48
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-07-11 17:15:34
 * @FilePath: /fe-novadax-faq/hooks/useResize.ts
 * @Description:
 */
import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState<number>(0);

  const resizeHandle = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return {
    width,
  };
};
