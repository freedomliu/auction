import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public itemId: string;
  public itemId2: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit(): void {
    // 查询快照
    this.itemId = this.routeInfo.snapshot.queryParams.id;
    this.itemId2 = this.routeInfo.snapshot.params.id2;

    // 订阅
    this.routeInfo.params.subscribe(item => {
      this.itemId2 = item.id2;
    });

    // resolve守卫传进来的
    this.routeInfo.data.subscribe((data: {item: Item}) => {
      console.log(data.item.id);
      console.log(data.item.name);
    });
  }
}
export class Item {
 constructor(public id: number, public  name: string){
 }
}
