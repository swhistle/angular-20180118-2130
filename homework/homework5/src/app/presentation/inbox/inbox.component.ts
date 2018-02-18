import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }

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
        'letter 6'
      ]
    }
  ];

  ngOnInit() {
  }

}
