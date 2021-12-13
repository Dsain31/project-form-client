import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common/common.service';
import { ProjectFormService } from 'src/app/model/project-form/project-form.service';

@Component({
  selector: 'app-project-costs',
  templateUrl: './../../view/project-costs/project-costs.component.html',
  styleUrls: ['./../../view/project-costs/project-costs.component.scss']
})
export class ProjectCostsComponent implements OnInit {
  @Input() projectForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private projectFormService: ProjectFormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addMoreOption();
  }
  get projectCostsGroup() {
    return this.projectForm.controls["projectCosts"] as FormGroup
  }
  get projectCostsOptionsArray() {
    return this.projectCostsGroup.controls["projectCostsOptions"] as FormArray;
  }

  addMoreOption() {
    this.projectCostsOptionsArray.push(this.addFormGroup())
  }

  addFormGroup() {
    return this.fb.group({
      duration: ['', [Validators.required]],
      costs: ['', [Validators.required]]
    })
  }

  removeOptions(index: number) {
    this.projectCostsOptionsArray.removeAt(index);
  }

  get projectCosts() {
    return this.projectForm.get("projectCosts")!;
  }
  onFinish() {
    if (this.projectCosts.invalid && this.projectForm.invalid) {
      this.commonService.openSnackBar("Fill all fields");
      return;
    }
    this.projectFormService.createProjectForm(this.projectForm.value).subscribe((res) => {
      this.commonService.openSnackBar(res.message);
      this.router.navigate(['home']);
    }, (err) => {
      this.commonService.openSnackBar(err);
    })
  }

}
