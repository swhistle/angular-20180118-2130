import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public userBackgroundColor = ['rgb(220, 220, 200)', 'rgb(220, 220, 200)', 'rgb(220, 220, 200)'];

  public Users = [
    {
      name: "Пётр Алексеевич Романов (I)",
      position: "Царь",
      avatar: "http://psifactor.info/wp-content/uploads/2016/12/ue0bzh5s.jpeg\n"
    },
    {
      name: "Чапаев Василий Иванович",
      position: "Ведущий инженер",
      avatar: "http://uvalibrary.ucoz.net/_pu/0/68577133.jpg"
    },
    {
      name: "Ржевский",
      position: "Поручик",
      avatar: "https://im0-tub-ru.yandex.net/i?id=8222ed9fb8dfa69ed8ee271d25456775-l&n=13"
    }
  ];

  private randomNumber = () => {
    return Math.round(Math.random() * 255 * 255 * 255);
  };

  constructor() { }

  changeColor(index) {
    this.userBackgroundColor[index] = `#${this.randomNumber().toString(16)}`;
  }

  ngOnInit() {
  }

}
