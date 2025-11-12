import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DigimonListComponent } from './digimon-list-component';

describe('DigimonListComponent', () => {
  let component: DigimonListComponent;
  let fixture: ComponentFixture<DigimonListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonListComponent, HttpClientTestingModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DigimonListComponent);
    component = fixture.componentInstance;

    // Handle the HTTP request made by the component
    const req = httpMock.expectOne('https://digi-api.com/api/v1/digimon?page=0&pageSize=5');
    expect(req.request.method).toBe('GET');
    req.flush({ content: [], pageable: { nextPage: '', previousPage: '' } });

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
