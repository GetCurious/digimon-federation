import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { DigimonDetail } from './models/digimon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digimon-detail',
  imports: [SlicePipe],
  templateUrl: './digimon-detail-component.html',
  styleUrl: './digimon-detail-component.scss',
})
export class DigimonDetailComponent {
  protected digimon = signal<DigimonDetail | null>(null);

  constructor(http: HttpClient, route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id');
    http.get<DigimonDetail>(`https://digi-api.com/api/v1/digimon/${id}`).subscribe({
      next: (digimon) => {
        this.digimon.set(digimon);
      },
      error: console.error
    });
  }

}
