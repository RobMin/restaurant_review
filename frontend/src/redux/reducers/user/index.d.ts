export interface UserState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

interface User {
  id: string;
  email: string;
}
