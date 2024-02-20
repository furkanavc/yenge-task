export interface Credentials {
  username: string;
  password: string;
}

export interface AuthStoreState {
  isLoggedIn: boolean;
  username: string;
  name: string;
}

export interface CatImage {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface CatStoreState {
  data?: CatImage;
  loading: boolean;
}
