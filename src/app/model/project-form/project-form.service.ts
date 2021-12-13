import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CommonService } from 'src/app/global/common/common.service';
import { AjaxResponse } from 'src/app/interface/ajax.response';
import { ProjectFormCreate, ProjectFormData } from 'src/app/interface/project-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {
  apiUrl = environment.apiUrl + "/project_form";
  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  createProjectForm(data: any): Observable<AjaxResponse<ProjectFormCreate>> {
    return this.http.post<AjaxResponse<ProjectFormCreate>>(this.apiUrl, data)
      .pipe((catchError(this.commonService.handleError)));
  }

  getProjectForm(): Observable<AjaxResponse<ProjectFormData>> {
    return this.http.get<AjaxResponse<ProjectFormData>>(this.apiUrl + '/get')
      .pipe((catchError(this.commonService.handleError)));
  }
}