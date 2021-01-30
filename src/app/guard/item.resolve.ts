import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Item, ItemComponent} from '../item/item.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

// 用于注入 Router
// 进入路由前守卫
// 进入某个页面前 获取必要的数据 不存在则提示异常或其他处理
@Injectable()
export class ItemResolve implements Resolve<Item>{

  constructor(private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Promise<Item> | Item {
    const id: string = route.params.id2;
    if (id === '2') {
      return new Item(2, 'xiaomi2');
    } else {
      return new Item(3, 'xiaomi3');
    }
    //router 不满足可以通过router导航到指定页面
  }
}
