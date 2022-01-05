import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quotes:Quotes[] = [
    new Quotes(1, 'Ruweydha', 'Life is like riding a bicycle. To keep your balance you must keep moving.','Albert Einstein',new Date(2022,3,11),0,0),
    new Quotes(2, 'Aisha', 'You will face many defeats in life, but never let yourself be defeated.','Maya Angelou',new Date(2022,2,11),0,0),
    new Quotes(3, 'Liyo', 'The older you get, the more fragile you understand life to be. I think that is good motivation for getting out of bed joyfully each day.','Julia Roberts',new Date(2022,4,11),0,0),
    new Quotes(1, 'Ruweydha', 'You are never too old to set another goal or to dream a new dream.','C.B.Lewis',new Date(2022,3,11),0,0),

  
  ];
  addNewQuote(quote:any){
    let quotesLength = this.quotes.length;
    quote.id = quotesLength +1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)
  }

}
