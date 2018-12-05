export class User{

 nameFirst?: string;
 nameLast?: string;
 email?: string;

 isAdmin?: boolean;

 timein?: Date;
 timeout?: Date;
 totalTimeMin?:number;      //keeps track of total time

/*
  Time is being counted from 0 to 23
  We subtract timeout to timein. (Users will not be able to stay in the club after 11pm, making it impossible to
                                  for a member to stay in the club from 23 to 2)
*/
}
