
export interface State {
  loggedIn: boolean;
  user: string;
  token: string;
}

export const initialState = {
  loggedIn: false,
  user: '',
  token: ''
};
