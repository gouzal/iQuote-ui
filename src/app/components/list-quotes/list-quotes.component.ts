import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/models/quote.model';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  quotes: Quote[];
  quotesList: Quote[] = [];
  offset: number = 0;
  limit: number = 10;
  isSpinner: boolean = false;
  isFinnished: boolean = false;

  constructor(
    private quoteService: QuoteService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.quoteService.listQuotes().subscribe(
      (quotes: Quote[]) => {
        this.quotes = quotes;
        this.spinner.hide();
        this.onScrollDown();
      }
    );
  }

  onScrollDown() {
    if(!this.isSpinner && !this.isFinnished) {
      this.spinner.show();
      this.isSpinner = true;
      let from = this.offset * this.limit;
      let to = from + this.limit;
      this.isFinnished = this.quotes.length > to ? false : true;
      this.offset++;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.quotesList = this.quotesList.concat(this.quotes.slice(from, to));
        this.isSpinner = false;
        this.spinner.hide();
      }, 5000);
    }
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

}
