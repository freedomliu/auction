import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/Rx';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: FormControl = new FormControl();
  formModel: FormGroup;

  categories: string[];

  exam;
  subject;
  isCreating = false;
  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: ['-1']
    });
  }

  positiveNumberValidator(control: FormControl): any{
    debugger;
    if (!control.value){
      return null;
    }
    const price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }

  ngOnInit(): void {
    this.categories = this.productService.getAllCategories();
    this.searchInput.valueChanges.debounceTime(500).subscribe(stockCode => this.getStockInfo(stockCode));
  }

  getStockInfo(value: string) {
    console.log(value);
  }

  search() {
    debugger
    if (this.formModel.valid){
      console.log(this.formModel.value);
    }

    this.exam = {examId: '1', examName: '五十九中学'};
    this.subject = [{subjectId: '1', subjectName: '语文', score: 5, status: '0'},
      {subjectId: '2', subjectName: '数学', score: 9.3, status: '0'},
      {subjectId: '3', subjectName: '外语', score: 10.35888, status: '0'}];
    this.isCreating = false;
  }

  create(id) {
    for (const item of this.subject) {
      if (item.subjectId === id) {
        item.status = '1';
        this.isCreating = true;
      }
    }
  }
}
