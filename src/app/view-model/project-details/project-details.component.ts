import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './../../view/project-details/project-details.component.html',
  styleUrls: ['./../../view/project-details/project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() projectForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
