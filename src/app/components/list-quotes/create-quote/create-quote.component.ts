import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class CreateQuoteComponent implements OnInit {

  tags: any[] = [];
  quoteForm: FormGroup;
  submitted: boolean = false;
  errorMessage: string;
  quote: Quote;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.getTags();
    this.initForm();
  }

  initForm() {
    this.quoteForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      citation: ['', [Validators.required]],
      tags: [[], [Validators.required]],
      visible: [false]
    });
  }

  get f() { return this.quoteForm.controls; }

  getTags() {
    this.tags = [
      {
        id: 'multiple1',
        name: 'Multiple 1'
      },
      {
        id: 'multiple2',
        name: 'Multiple 2'
      },
      {
        id: 'multiple3',
        name: 'Multiple 3'
      },
      {
        id: 'multiple4',
        name: 'Multiple 4'
      }
    ];
  }

  addTag(name) {
    return { name: name, tag: true };
  }

  onSubmit() {
    this.submitted = true;
  
    if(this.quoteForm.invalid) {
      return;
    }

    this.quote = new Quote(
      this.f.citation.value,
      this.f.visible.value,
      this.f.author.value,
      this.f.tags.value
    );

    console.log(this.quote);

    // this.quoteService.createQuote(this.quote).subscribe(
    //   res => {
    //     this.router.navigate(['/quotes']);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}
