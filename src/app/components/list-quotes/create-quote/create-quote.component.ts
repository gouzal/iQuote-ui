import { Component, OnInit } from '@angular/core';

import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  tags: Array<Select2OptionData>;
  options: Options;
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
    this.options = {
      width: '100%',
      multiple: true,
      tags: true
    };

    this.getTags();
    this.initForm();
  }

  initForm() {
    this.quoteForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      citation: ['', [Validators.required]],
      tags: [[]],
      visible: [false]
    });
  }

  get f() { return this.quoteForm.controls; }

  getTags() {
    this.tags = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];
  }

  onSubmit() {
    this.submitted = true;
  
    if(this.quoteForm.invalid) {
      return;
    }

    this.quote = new Quote(
      this.f.quote.value,
      this.f.visible.value,
      this.f.author.value,
      this.f.tags.value
    );

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
