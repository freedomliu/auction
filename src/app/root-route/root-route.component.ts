import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root-route',
  templateUrl: './root-route.component.html',
  styleUrls: ['./root-route.component.scss']
})
export class RootRouteComponent implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  toItemDetails() {
    this.router.navigate(['/root/route/item', 3]);
  }
}
