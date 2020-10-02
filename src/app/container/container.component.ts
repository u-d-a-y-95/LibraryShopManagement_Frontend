import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  routerUrl:string
  constructor(router:Router) {
    router.events.subscribe(e=>{
      this.routerUrl=router.url;
     })
   }

  ngOnInit(): void {
  }

}