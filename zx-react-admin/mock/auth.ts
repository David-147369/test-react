import type { MockMethod } from "vite-plugin-mock";
import type { BackendServiceResult } from "@/typings/service";
import { LoginRequest } from "@/typings/auth";
import { randomStr } from "@/utils/common";
// const a = "1";
// const a = 2;
export default [
  {
    url: "/api/login",
    method: "post",
    response: (data: LoginRequest): BackendServiceResult => {
      if (data.body.code !== data.body.originCode) {
        return {
          code: 201,
          message: "验证码不正确",
          data: null,
        };
      }
      return {
        code: 200,
        message: "ok",
        data: {
          token: 1234,
        },
      };
    },
  },
  {
    url: "/api/getCode",
    method: "get",
    response: (): BackendServiceResult => {
      const code = randomStr("0123456789", 4);
      return {
        code: 200,
        message: "ok",
        data: {
          code,
        },
      };
    },
  },
  {
    url: "/api/getMenu",
    method: "get",
    response: (): BackendServiceResult => {
      return {
        code: 200,
        message: "ok",
        data: {
          list: [
            {
              label: "一级菜单1",
              path: "1",
              children: [
                {
                  label: "二级菜单1",
                  path: "/page1",
                },
                {
                  label: "二级菜单1",
                  path: "/page1/page101",
                },
              ],
            },

            {
              label: "一级菜单2",
              path: "2",
              children: [
                {
                  label: "二级菜单1",
                  path: "/page2",
                },
                {
                  label: "二级菜单1",
                  path: "/page2/page201",
                },
              ],
            },
          ],
        },
      };
    },
  },
] as MockMethod[];
