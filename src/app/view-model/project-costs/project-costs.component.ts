import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common/common.service';

@Component({
  selector: 'app-project-costs',
  templateUrl: './../../view/project-costs/project-costs.component.html',
  styleUrls: ['./../../view/project-costs/project-costs.component.scss']
})
export class ProjectCostsComponent implements OnInit {
  @Input() projectForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
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
      this.commonSer
      return;
    }
  }

}
