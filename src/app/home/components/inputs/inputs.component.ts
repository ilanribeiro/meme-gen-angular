import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btc-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  url: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
