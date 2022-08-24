export interface Login {
  username: string,
  password: string,
}

export interface LoginResponse {
  hasError: boolean;
  message: string;
  statusHttp: number;
  content: {
    username: string,
    token: string,
    expireDate: Date,
    userId: number
  }
}
