import {CanActivate} from '@angular/router';

// 路由守卫 满足条件才可以路由
export class LoginGuard implements CanActivate{
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn){
      console.log('用户未登陆');
    }
    return loggedIn;
  }
}
