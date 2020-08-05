import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quote } from 'src/app/models/quote.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class FormQuoteComponent implements OnInit {

  tags: any[] = [];
  quoteForm: FormGroup;
  submitted: boolean = false;
  errorMessage: string;
  quote: Quote = new Quote;
  label: string = 'Create';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private quoteService: QuoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    if(this.route.snapshot.paramMap.has('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.label = 'Update';
      this.getQuote(+id);
    }
  }

  getQuote(id: number) {
    this.quoteService.singleQuote(id)
    .subscribe(
      data => {
        this.quote = data;
        this.quoteForm.setValue({
          author: this.quote.author.fullName,
          citation: this.quote.citation,
          tags: this.quote.tags,
          visible: this.quote.visible
        });
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  initForm() {
    this.quoteForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      citation: ['', [Validators.required]],
      tags: [[], [Validators.required]],
      visible: []
    });
  }

  get f() { return this.quoteForm.controls; }

  addTag(value) {
    return { id: null, value: value };
  }

  onSubmit() {
    this.submitted = true;
  
    if(this.quoteForm.invalid) {
      return;
    }

    this.quote.author.fullName = this.f.author.value;
    this.quote.citation = this.f.citation.value;
    this.quote.tags = this.f.tags.value;
    this.quote.visible = this.f.visible.value;

    if(this.quote.id) {
      console.log(this.quote);
    } else {
      console.log(this.quote);
    }

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
