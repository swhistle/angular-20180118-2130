import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  nameControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.nameControl = new FormControl('Sasha');
  }

}
