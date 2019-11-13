export const allUsers = [
  {
    id: 1,
    name: "penta1",
    email: "penta1@naver.com",
    password: "1234"
  },
  {
    id: 2,
    name: "penta2",
    email: "penta2@naver.com",
    password: "1234"
  }
];

declare interface UserInfo {
  id?: number | undefined | null;
  name?: string | undefined | null;
  email?: string | undefined | null;
  password?: string | undefined | null;
}

// export interface User {
//   userInfo?: UserInfo;
// }

export declare interface ProfileState {
  userInfo: any;
  isLogin: boolean;
  isLoginError: boolean;
}
