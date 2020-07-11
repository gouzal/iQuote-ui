import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  listQuotes()
  {
    return this.http.get<Quote[]>(`${environment.apiUrl}/quotes`);
  }

  singleQuote(id: number)
  {
    return this.http.get<Quote[]>(`${environment.apiUrl}/quotes/${id}`);
  }

  createQuote(quote: Quote)
  {
    return this.http.post<Quote[]>(`${environment.apiUrl}/quotes`, JSON.stringify(quote));
  }

  updateQuote(id: number, quote: Quote)
  {
    return this.http.put<Quote[]>(`${environment.apiUrl}/quotes/${id}`, JSON.stringify(quote));
  }

  deleteQuote(id: number)
  {
    return this.http.delete(`${environment.apiUrl}/quotes${id}`);
  }
}
