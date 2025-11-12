import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DigimonList, type DigimonListItem } from './models/digimon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digimon-list',
  imports: [RouterLink],
  templateUrl: './digimon-list-component.html',
  styleUrl: './digimon-list-component.scss',
})
export class DigimonListComponent {
  protected digimons = signal<DigimonListItem[]>([]);
    protected http: HttpClient;
    protected nextPage = signal<string>('');
    protected previousPage = signal<string>('');

    constructor(http: HttpClient) {
        this.http = http;
        this.http
            .get<DigimonList>('https://digi-api.com/api/v1/digimon?page=0&pageSize=5')
            .subscribe({
                next: (response) => this.setData(response),
                error: console.error
            });
    }

    setData(response: DigimonList) {
        this.digimons.set(response.content);
        this.nextPage.set(response.pageable.nextPage);
        this.previousPage.set(response.pageable.previousPage);
    }

    goNext() {
        this.http
            .get<DigimonList>(this.nextPage())
            .subscribe({
                next: (response) => this.setData(response),
                error: console.error
            });
    }

    goPrevious() {
        this.http
            .get<DigimonList>(this.previousPage())
            .subscribe({
                next: (response) => this.setData(response),
                error: console.error
            });
    }
}
