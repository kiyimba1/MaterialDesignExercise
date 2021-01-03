import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {
  sum: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  add() {
    this.sum++;
  }


}
