import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';

import { Observable } from 'rxjs';
import { Influencer } from '../Influencer';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  constructor(

    private http: HttpClient,
    private storage: LocalStorageService
  ) {}
  private apiUrl = 'http://localhost:3000/influenciadores';
  private token = this.storage.get('token');

  private header = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });
  private requestOptions = { headers: this.header };
  getAll(): Observable<Influencer[]> {
    console.log('teste,', this.token);
    return this.http.get<Influencer[]>(this.apiUrl, this.requestOptions);
  }
}
