import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';
declare var M:any;

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers:[MaterialService]
})
export class MaterialComponent implements OnInit {

  // userform: FormGroup;

  //domainList: any = ['Angular','React','Express','MongoDB','NodeJS','JQuery'];

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private fb: FormBuilder,
  //   public materialService:MaterialService
  // ) { 
  //   this.userform = this.fb.group({
  //     normal_Links: ['', [Validators.required]],
  //     payable_Links: ['', [Validators.required]],
  //     payable_Videos:['',[Validators.required]],
  //     _id: [0, [Validators.required]],
  //     cost:['',[Validators.required]]
  //   });

  // }

  constructor(public materialService:MaterialService,public router:Router){}
  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
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

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.materialService.postMaterial(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
       // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.materialService.putMaterial(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
       // M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = res as Material[];
    });
  }

  onEdit(emp: Material) {
    this.materialService.selectedMaterial = emp;
    this.router.navigate(['/material']);
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
       // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
