import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment [];

  newRating = 5;
  newComment = '';

  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productId = this.routeInfo.snapshot.params.prodId;
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getComments4ProductId(productId);
  }
  addComment() {
    let comment = new Comment(1, this.product.id, '2021-01-11', '小乐', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // 以0位起始 开始求和
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
