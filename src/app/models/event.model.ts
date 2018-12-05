export class Event {
  public title: string;
  public date: string;
  public timeStart: string;
  public timeEnd: string;
  public details: string;

  constructor(title: string, date: string, timeStart: string, timeEnd: string, details: string) {
    this.title = title;
    this.date = date;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.details = details;
  }
}
