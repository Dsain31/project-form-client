import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/global/common/common.service';
import { Activity, Category, Organization } from 'src/app/interface/project-details';
import { ProjectDetailsService } from 'src/app/model/project-details/project-details.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './../../view/project-details/project-details.component.html',
  styleUrls: ['./../../view/project-details/project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() projectForm!: FormGroup;
  organizationList!: Organization[];
  categoryList!: Category[];
  activityList!: Activity[];
  constructor(
    private projectDetailsService: ProjectDetailsService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getOrganizationList()
  }

  getOrganizationList() {
    this.projectDetailsService.getOrganizationList().subscribe((res) => {
      this.organizationList = res.data;
    }, (err) => {
      this.commonService.openSnackBar(err);
    })
  }

  getCategoryList(organizationName: string) {
    const filter = this.organizationList.filter((item) => item.name === organizationName);
    let organizationId: number;
    if (filter && filter.length > 0) {
      organizationId = filter[0].id;
      this.projectDetailsService.getCategoryList(organizationId).subscribe((res) => {
        this.categoryList = res.data;
      }, (err) => {
        this.commonService.openSnackBar(err);
      })
    }
  }

  getActivityList(categoryName: string) {
    const filter = this.categoryList.filter((item) => item.categoryName === categoryName);
    let categoryId: number;
    if (filter && filter.length > 0) {
      categoryId = filter[0].id;
      this.projectDetailsService.getActivityList(categoryId).subscribe((res) => {
        this.activityList = res.data;
      }, (err) => {
        this.commonService.openSnackBar(err);
      })
    }
  }

  get projectDetails() {
    return this.projectForm.get('projectDetails')!;
  }

  onSubmit() {
    console.log(this.projectForm.value)
    if (this.projectDetails.invalid) {
      return
    }
  }
}
