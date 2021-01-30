import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ItemResolve} from './guard/item.resolve';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductHomeComponent} from './product-home/product-home.component';
import {RootProductComponent} from './root-product/root-product.component';
import {RootRouteComponent} from './root-route/root-route.component';
import {PruductComponent} from './pruduct/pruduct.component';

// 路由配置 保存url和组件对应关系
/*const routes: Routes = [
  // 重定向路由
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  /!*辅助路由*!/
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  // 子路由
  {path: 'item/:id2', component: ItemComponent, children: [
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ], canActivate: [LoginGuard],
       canDeactivate: [UnsavedGuard],
        resolve: {
        // 传入一个item  item由itemresolve生成
        item: ItemResolve
        }},
  {path: '**', component: Code404Component}
  ];*/
// path里不能用斜杠开头
const routes: Routes = [
  // 重定向路由
  {path: '', redirectTo: 'root/product', pathMatch: 'full'},
  {path: 'root/product', component: RootProductComponent, children: [
      {path: '', component: PruductComponent},
      {path: ':prodId', component: ProductDetailComponent}
    ]},
  {path: 'root/route', component: RootRouteComponent, children: [
      {path: 'chat', component: ChatComponent, outlet: 'aux'},
      {path: 'item/:id2', component: ItemComponent, children: [
          {path: '', component: ProductDescComponent},
          {path: 'seller/:id', component: SellerInfoComponent}
        ], canActivate: [LoginGuard],
        // 路由守卫是数组
        canDeactivate: [UnsavedGuard],
        resolve: {
          // 传入一个item  item由itemresolve生成
          item: ItemResolve
        }}
    ]},
  // 子路由
/*  {path: 'item/:id2', component: ItemComponent, children: [
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ], canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard],
    resolve: {
      // 传入一个item  item由itemresolve生成
      item: ItemResolve
    }},*/
  /*{path: 'chat', component: ChatComponent, outlet: 'aux'},*/
  {path: '**', component: Code404Component}
];
@NgModule({
  // 多模块项目RouterModule.forChild()
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ItemResolve]
})
export class AppRoutingModule { }
