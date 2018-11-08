export class Member {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public permit: string; //permissions to admin or member for an account.
  public totalTime: string;
  public startTime: string;
  public endTime: string;

  constructor(firstName: string, lastName: string, email: string, password: string, permit: string, totalTime: string, startTime: string, endTime: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.permit = permit;
    this.totalTime = totalTime;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
