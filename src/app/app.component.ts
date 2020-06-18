import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  quotes:Quote[] = [
    {id:1,quotephrase:'Love is love is love', quoteauthor: 'Unknown', submitDate: new Date, quotesubmitter: "Abcd", showQuoteauthor: true},
    {id:2,quotephrase:'Peace is the answer', quoteauthor: 'Someone peaceful', submitDate: new Date, quotesubmitter: "Defg", showQuoteauthor: true},
    {id:3,quotephrase:'This too shall pass', quoteauthor: 'Someone Positive', submitDate: new Date, quotesubmitter: "Hijk", showQuoteauthor: true},
  ];
}
