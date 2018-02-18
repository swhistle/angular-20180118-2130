import { Injectable } from '@angular/core';
import { UserListService } from './user-list.service';

@Injectable()
export class AuthService {

  constructor(private userList: UserListService) { }

  private _userIsTrue: boolean = false;

  isUserTrue(email: string, password: string) {
    this.userList.users.some((user) => {
      if(email === user.email && password === user.password) {
        return this._userIsTrue = true;
      } else {
        return this._userIsTrue = false;
      }
    });

    return this._userIsTrue;
  }

  getUserTrue() {
    return this._userIsTrue;
  }

  logOut() {
    return this._userIsTrue = false;
  }

}
