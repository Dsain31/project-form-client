import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
