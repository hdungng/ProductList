export class AuthUser {
  constructor(
    public avatar: string | null,
    public fullName: string,
    public mobile_number: string,
    public user_token: string,
    public user_type: number
  ) {}
}
