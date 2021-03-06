import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectFormComponent } from './project-form.component';
import { MaterialModule } from 'src/app/global/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectGalleryComponent } from '../project-gallery/project-gallery.component';
import { ProjectCostsComponent } from '../project-costs/project-costs.component';



@NgModule({
  declarations: [ProjectFormComponent,
    ProjectDetailsComponent,
    ProjectGalleryComponent,
    ProjectCostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '', component: ProjectFormComponent
      }
    ])
  ]
})
export class ProjectFormModule { }
