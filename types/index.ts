interface Credentials {
  username: string;
  password: string;
}

interface AuthStoreState {
  isLoggedIn: boolean;
  username: string;
  name: string;
}

interface CatImage {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}
interface CatStoreState {
  data: CatImage | null;
  loading: boolean;
}

export type { Credentials, AuthStoreState, CatStoreState, CatImage };
