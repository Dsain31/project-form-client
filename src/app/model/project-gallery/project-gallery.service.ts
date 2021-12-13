import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CommonService } from 'src/app/global/common/common.service';
import { AjaxResponse } from 'src/app/interface/ajax.response';
import { ImageUpload, DeleteImage } from 'src/app/interface/image.upload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectGalleryService {
  apiUrl = environment.apiUrl + "/upload";
  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }
  uploadImages(data: any): Observable<AjaxResponse<ImageUpload[]>> {
    return this.http.post<AjaxResponse<ImageUpload[]>>(this.apiUrl, data)
      .pipe((catchError(this.commonService.handleError)));
  }

  deleteImage(imageName: string): Observable<AjaxResponse<DeleteImage>> {
    return this.http.post<AjaxResponse<DeleteImage>>(this.apiUrl + "/delete", { imageName })
      .pipe((catchError(this.commonService.handleError)));
  }
}
