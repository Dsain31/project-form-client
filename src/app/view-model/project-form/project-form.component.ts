import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './../../view/project-form/project-form.component.html',
  styleUrls: ['./../../view/project-form/project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projectForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeProjectForm();
  }

  initializeProjectForm() {
    this.projectForm = this.fb.group({
      projectDetails: this.fb.group({
        organization: ['', [Validators.required]],
        category: ['', [Validators.required]],
        activity: ['', [Validators.required]],
        title: ['', [Validators.required]],
        minAge: ['', [Validators.required]],
        maxAge: ['', [Validators.required]],
        description: ['', [Validators.required]]
      })
    })
  }

  get projectDetails() {
    return this.projectForm.get("projectDetails")!;
  }

}
