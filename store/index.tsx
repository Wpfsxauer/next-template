/*
 * @Date: 2022-05-27 18:58:10
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2022-08-29 15:22:15
 * @FilePath: /next-template/store/index.tsx
 * @Description:
 */
import { useReducer, createContext } from "react";

import type { Context, Reducer, Dispatch, ReactNode } from "react";
export interface GlobalFace {
  title: string;
  id: number;
}

export interface GlobalActionFace {
  type: keyof GlobalFace;
  value: string | number;
}

export type GlobalReducerFace = Reducer<GlobalFace, GlobalActionFace>;

export type GlobalContextFace = Context<{
  state: GlobalFace;
  dispatch: Dispatch<GlobalActionFace>;
}>;

export interface GlobalHandleFace {
  (data: { children: ReactNode }): JSX.Element;
}

const initialState: GlobalFace = {
  title: "",
  id: 0,
};

const reducer: GlobalReducerFace = (state, action) => {
  const { type, value } = action;
  return {
    ...state,
    [type]: value,
  };
};

export const GlobalContext: GlobalContextFace = createContext({
  state: initialState,
  dispatch: (value: GlobalActionFace) => {},
});

export const GlobalHandle: GlobalHandleFace = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
