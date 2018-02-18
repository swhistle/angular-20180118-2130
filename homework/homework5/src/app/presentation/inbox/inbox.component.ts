import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  private _userName = this._authService.userName;
  private _userId = this._authService.userId;

  letters = [
    {
      id: 0,
      letterList: [
        'letter 1',
        'letter 2',
        'letter 3'
      ]
    },
    {
      id: 1,
      letterList: [
        'letter 4',
        'letter 5',
        'letter 6',
        'letter 7',
        'letter 8'
      ]
    }
  ];

  ngOnInit() {
  }

}
