import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

import { DigimonDetailComponent } from './digimon-detail-component';

describe('DigimonDetailComponent', () => {
  let component: DigimonDetailComponent;
  let fixture: ComponentFixture<DigimonDetailComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonDetailComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'agumon' // Mock route parameter
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DigimonDetailComponent);
    component = fixture.componentInstance;
    
    // Handle the HTTP request made by the component
    const req = httpMock.expectOne('https://digi-api.com/api/v1/digimon/agumon');
    expect(req.request.method).toBe('GET');
    req.flush({ id: 1, name: 'Agumon' });
    
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
