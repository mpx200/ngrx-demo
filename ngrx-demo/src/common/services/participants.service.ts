// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Participants } from '../models/';

@Injectable()
export class ParticipantsService {
  hardCodeParticipants: Participants[] = [
    {
      name: 'Ivan',
      surname: 'Stepic',
      company: 'Comtrade',
      imageSrc: 'd_silhouette_Batman.jpg',
      location: 'Kragujevac'
    },
    {
      name: 'Borislav',
      surname: 'Kolak',
      company: 'Comtrade',
      imageSrc: 'deadpool.png',
      location: 'Kragujevac'
    },
    {
      name: 'Ivan',
      surname: 'Miletic',
      company: 'Comtrade',
      imageSrc: 'playboy.png',
      location: 'Cacak'
    }
  ];

  constructor() {}
  // constructor(private http: HttpClient) {}

  public getParticipants(): Observable<Participants[]> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.hardCodeParticipants);
        observer.complete();
      }, 2000);
    });
  }
}
