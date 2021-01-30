import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PruductComponent } from './pruduct/pruduct.component';
import { StarsComponent } from './stars/stars.component';
import { ItemComponent } from './item/item.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RootProductComponent } from './root-product/root-product.component';
import { RootRouteComponent } from './root-route/root-route.component';
import { HomeComponent } from './home/home.component';
import { StatePipe } from './pipe/state.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  // 包含的组件 指令 管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    PruductComponent,
    StarsComponent,
    ItemComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    ProductDetailComponent,
    ProductHomeComponent,
    Product1Component,
    RootProductComponent,
    RootRouteComponent,
    HomeComponent,
    StatePipe,
    FilterPipe
  ],
  // 正常运转需要依赖的模块
  imports: [
    // 浏览器模块
    BrowserModule,
    // http服务
    AppRoutingModule,
    FormsModule,
    // 响应式编程模块
    ReactiveFormsModule,
    HttpClientModule
  ],
  // 声明模块中提供的服务 提供器  useClass可以是ProductService的实现类
  providers: [{provide: ProductService, useClass: ProductService}],
  // 模块的指定主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
