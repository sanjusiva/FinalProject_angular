import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  // id:number=0;
  // constructor(private materialService:MaterialService,private route:ActivatedRoute) { }
  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.id = params['id'];
  //     if (this.id != null) {
  //       this.userList=params['id'];
  //       const data = this.materialService.getUsersByID(this.id);
  //       console.warn(data);

  //       if (data) {
  //         this.userList=data;
  //       }
  //     }
  //   });
    
  // }
  ngOnInit(): void {
    
  }

}
