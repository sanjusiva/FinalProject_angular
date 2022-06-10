import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Material } from '../shared/material.model';
import { MaterialComponent } from '../material/material.component'; 
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  userName:string='';
  constructor(public materialService:MaterialService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
    
  }
  onEdit(mat: Material) {
    this.materialService.selectedMaterial = mat;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm();
       // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = res as Material[];
    });
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.materialService.selectedMaterial= {
      _id: "",
      normal_Links:"",
      payable_Links:"",
      payable_Videos:"",
      cost:0
    }
  }
}
