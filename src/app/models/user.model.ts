export class User {
  constructor(
    public id: number,
    public email: string,
    public username: string,
    public fullName: string,
    public mobileNumber: string,
    public userType: number
  ) {}
}
