import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.quoteService.listQuotes().subscribe(
      (quotes: Quote[]) => this.quotes = quotes
    );
  }

  onScroll() {
    console.log('scrolled!!');
  }

}
