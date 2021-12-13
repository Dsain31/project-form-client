import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/global/common/common.service';
import { ProjectGalleryService } from 'src/app/model/project-gallery/project-gallery.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './../../view/project-gallery/project-gallery.component.html',
  styleUrls: ['./../../view/project-gallery/project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {
  @Input() projectForm!: FormGroup;
  images!: FileList;
  apiUrl = environment.apiUrl + '/upload/';
  constructor(
    private projectGalleryService: ProjectGalleryService,
    private commonService: CommonService

  ) { }

  ngOnInit(): void {
  }

  onImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const reader = new FileReader();
      this.images = target.files;
      reader.onload = () => { };
      reader.readAsDataURL(target.files[0]);
    }
  }

  uploadImages() {
    const fd = new FormData();
    if (this.images && this.images.length > 0) {
      for (let i = 0; i < this.images.length; i++) {
        fd.append('projectImages', this.images[i], this.images[i].name)
      }

    }
    this.projectGalleryService.uploadImages(fd).subscribe((res) => {
      for (const file of res.data) {
        if (file) {
          this.projectImagesArray.push(new FormControl(`${file.filename}`));
        }
      }
    }, (err) => {
      this.commonService.openSnackBar(err);
    })
  }

  get projectImagesArray() {
    return this.projectForm.get("projectGallery.projectImages") as FormArray;
  }

  get projectGallery() {
    return this.projectForm.get("projectGallery")!;
  }
  deleteImage(imageName: string, index: number) {
    this.projectImagesArray.removeAt(index);
    this, this.projectGalleryService.deleteImage(imageName).subscribe((res) => {
      this.commonService.openSnackBar(res.message);
    }, (err) => {
      this.commonService.openSnackBar(err);
    })
  }

  onSubmit() {
    if (this.projectGallery.invalid) {
      return
    }
  }
}
