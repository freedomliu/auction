import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 2, '这是第1个商品', ['穿戴']),
    new Product(2, '第2个商品', 3.99, 4, '这是第2个商品', ['家具']),
    new Product(3, '第3个商品', 5.99, 3.5, '这是第3个商品', ['穿戴']),
    new Product(4, '第4个商品', 2.99, 1, '这是第4个商品', ['农具']),
    new Product(5, '第5个商品', 1.99, 4, '这是第5个商品', ['航天']),
    new Product(6, '第6个商品', 9.99, 5, '这是第6个商品', ['互联网'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2021-01-01', '阿涛', 1, 'nice'),
    new Comment(1, 2, '2021-01-02', '阿涛', 2, 'nice'),
    new Comment(1, 3, '2021-01-03', '阿涛', 3, 'nice'),
    new Comment(1, 4, '2021-01-04', '阿涛', 4, 'nice'),
    new Comment(1, 5, '2021-01-05', '阿涛', 1, 'nice'),
    new Comment(1, 6, '2021-01-05', '阿涛', 3, 'nice'),
  ];

  constructor() {
  }

  getAllCategories(): string[] {
    return ['穿戴', '家具', '农具', '互联网', '航天'];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products[0];
  }

  getComments4ProductId(id: number): Comment[] {
    return this.comments;
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string){}
}
