export interface UserResponse {
  code: string;
  data: {
    mqtt: {
      client_id: string;
      host: string;
      password: string;
      path: string;
      port: number;
      project_code: string;
      protocol: string;
      username: string;
    };
    staff: {
      avatar: null;
      fullName: string;
      mobile_number: string;
      user_token: string;
      username: string;
    };
    message: string;
  };
}
