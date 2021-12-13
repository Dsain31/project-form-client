import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message)
    } else {
      console.error(error.error);
    }
    return (error.error) ? throwError(() => error.error) : throwError(() => "Something went wrong");
  }

  openSnackBar(message?: string, durationInSeconds?: number): void {
    const _durationInSeconds = durationInSeconds || 3;
    this._snackBar.open(message!, "X", {
      duration: _durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
