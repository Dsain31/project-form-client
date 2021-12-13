import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/global/common/common.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {
  apiUrl = environment.apiUrl + "/upload";
  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }
