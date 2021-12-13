import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CommonService } from 'src/app/global/common/common.service';
import { AjaxResponse } from 'src/app/interface/ajax.response';
import { DeleteImage, ImageUpload } from 'src/app/interface/image.upload';
import { Activity, Category, Organization } from 'src/app/interface/project-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getOrganizationList(): Observable<AjaxResponse<Organization[]>> {
    return this.http.get<AjaxResponse<Organization[]>>(this.apiUrl + '/organization_list')
      .pipe((catchError(this.commonService.handleError)));
  }

  getCategoryList(organizationId: number): Observable<AjaxResponse<Category[]>> {
    return this.http.get<AjaxResponse<Category[]>>(this.apiUrl + '/category_list?organizationId=' + organizationId)
      .pipe((catchError(this.commonService.handleError)));
  }
  getActivityList(categoryId: number): Observable<AjaxResponse<Activity[]>> {
    return this.http.get<AjaxResponse<Activity[]>>(this.apiUrl + '/activity_list?categoryId=' + categoryId)
      .pipe((catchError(this.commonService.handleError)));
  }


}
