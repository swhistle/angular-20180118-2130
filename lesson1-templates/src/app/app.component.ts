import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Users = [
    {
      name: "Чапаев Василий Иванович",
      position: "Ведущий инженер",
      avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
    },
    {
      name: "Анка",
      position: "Пулеметчица",
      avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
    },
    {
      name: "Ржевский",
      position: "Поручик",
      avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
    }
  ]

  constructor() {}

}
