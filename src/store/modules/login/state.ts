declare interface UserInfo {
  id?: number | undefined | null;
  first_name?: string | undefined | null;
  last_name?: string | undefined | null;
  avatar?: string | undefined | null;
  email?: string | undefined | null;
  password?: string | undefined | null;
  token?: string | undefined | null;
}

export declare interface State {
  userInfo: any;
  menuList?: any;
  isLogin: boolean;
  isLoginError: boolean;
  email: string;
  password: string;
  token: string;
  locale: string;
  themeColor: string;
}
