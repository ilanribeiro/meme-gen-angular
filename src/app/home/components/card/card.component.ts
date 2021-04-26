import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  sourceImg: string = "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  messageHere: string = 'Escrevi aqui';

  constructor() { }

  ngOnInit(): void {
  }

}
