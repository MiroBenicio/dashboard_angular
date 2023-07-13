import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';

import { Observable } from 'rxjs';
import { Influencer } from '../Influencer';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}
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

  postInfluencer(data: Influencer) {
    return this.http.post<Influencer[]>(this.apiUrl, data, this.requestOptions);
  }

  putInfluencer(data: Influencer, id: number) {
    console.log('teste', data);
    return this.http.put<Influencer[]>(
      this.apiUrl + `/${id}`,
      data,
      this.requestOptions
    );
  }

  deleteInfluencer(id: number) {
    return this.http.delete<any>(this.apiUrl + `/${id}`, this.requestOptions);
  }
}
