import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Love is love is love', 'Unknown', new Date(2020,3,14), "Abcd"),
    new Quote(2,'Peace is the answer', 'Someone Peaceful', new Date(2019,6,9), "Efgh"),
    new Quote(3,'This too shall pass', 'Someone Positive', new Date(2022,1,12), "Hijk"),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showQuoteauthor = !this.quotes[index].showQuoteauthor;
  }

  viewedQuote(isViewed, index){
    if (isViewed) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote (isViewed, index){
    if (isViewed) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quotephrase}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
