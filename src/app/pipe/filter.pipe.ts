import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../shared/product.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], args?: any[]): any[] {
    debugger
    if (!args[0] || !args[1]) {
      return list;
    }
    const result = [
      new Product(1, '第1个商品', 1.99, 2, '这是第1个商品', ['穿戴']),
      new Product(2, '第2个商品', 3.99, 4, '这是第2个商品', ['家具'])
    ]
    return result;
  }

}
