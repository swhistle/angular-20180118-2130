import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe(letter => {
      console.log(letter);
    })
  }

  ngOnInit() {
  }

}
