export class Transaction {
  constructor(
    public id: number,
    public transactionID: string,
    public createdTime: Date,
    public depositTime: Date,
    public collectTime: Date,
    public dateOfBirth: Date,
    public lockerName: string,
    public terminalName: string,
    public location: string,
    public status: number
  ) {}
}
