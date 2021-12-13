import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/global/common/common.service';
import { ProjectFormData } from 'src/app/interface/project-details';
import { ProjectFormService } from 'src/app/model/project-form/project-form.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './../../view/home/home.component.html',
  styleUrls: ['./../../view/home/home.component.scss']
})
export class HomeComponent implements OnInit {
  projectFormData!: ProjectFormData;
  apiUrl = environment.apiUrl + '/upload/';
  constructor(
    private commonService: CommonService,
    private projectFormService: ProjectFormService,
  ) { }

  ngOnInit(): void {
    this.getProjectForm()
  }

  getProjectForm() {
    this.projectFormService.getProjectForm().subscribe((res) => {
      this.projectFormData = res.data

    }, (err) => {
      this.commonService.openSnackBar(err);
    })
  }
}
