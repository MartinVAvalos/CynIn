export class Member {
  public name: string = null;
  public email: string = null;
  public password: string = null;
  public permit: string = 'mems'; //permissions to admin 'g@urd13n' or member 'mems' for an account.
  public totalTime: string = '0';
  public startTime: string = null;
  public endTime: string = null;

  constructor(name: string, email: string, password: string, permit: string, totalTime: string, startTime: string, endTime: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.permit = permit;
    this.totalTime = totalTime;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
