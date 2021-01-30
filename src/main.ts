// 关闭angular开发者模式
import { enableProdMode } from '@angular/core';
// 使用哪个模块启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 主模块
import { AppModule } from './app/app.module';
// 多环境支持
import { environment } from './environments/environment';
// 假如生产 关闭开发者模式
if (environment.production) {
  enableProdMode();
}
// 启动AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
