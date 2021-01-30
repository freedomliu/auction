import {CanDeactivate} from '@angular/router';
import {ItemComponent} from '../item/item.component';

// 满足条件才可以路由离开
export class UnsavedGuard implements  CanDeactivate<ItemComponent>{
  canDeactivate(componet: ItemComponent) {
    return window.confirm('确定要离开么');
  }

}
