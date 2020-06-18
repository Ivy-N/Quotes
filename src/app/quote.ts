export class Quote {
  public showQuoteauthor: boolean;
  constructor(public id: number,public quotephrase: string,public quoteauthor: string, public submitDate: Date, public quotesubmitter: string){
    this.showQuoteauthor=false;
  }
}
