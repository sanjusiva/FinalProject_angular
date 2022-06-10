import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private materialService: MaterialService, private router: Router) { }
  username: string = '';
  psw: string = '';

  display(formData: NgForm) {
    console.log(formData.value);
    if (this.username == "Sanju" && this.psw == "sanju123") {
      console.warn("you are admin");
      //this.username='Sanju';
      //console.log(this.userService.getDomainName());
      
      this.materialService.getUsername(this.username);
      this.router.navigate(['/material']);
    }
    else {
      this.materialService.getUsername(this.username);
      this.router.navigate(['/course']);
    }
  }


  ngOnInit(): void {
  }

}
