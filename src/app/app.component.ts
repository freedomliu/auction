import { Component } from '@angular/core';
import {Router} from '@angular/router';

// 装饰器@开头
@Component({
  // 元数据
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// 控制器
export class AppComponent {
  title = 'auction';

  constructor(private router: Router){
  }
}
