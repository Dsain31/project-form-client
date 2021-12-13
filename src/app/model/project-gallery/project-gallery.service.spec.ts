import { TestBed } from '@angular/core/testing';

import { ProjectGalleryService } from './project-gallery.service';

describe('ProjectGalleryService', () => {
  let service: ProjectGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
