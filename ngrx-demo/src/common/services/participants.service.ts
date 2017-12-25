// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Participant } from '../models/';
import 'rxjs/add/operator/delay';

@Injectable()
export class ParticipantsService {
  hardCodeParticipants: Participant[] = [
    {
      id: 1,
      name: 'Ivan',
      surname: 'Stepic',
      company: 'Comtrade',
      imageSrc: 'd_silhouette_Batman.jpg',
      location: 'Kragujevac'
    },
    {
      id: 2,
      name: 'Borislav',
      surname: 'Kolak',
      company: 'Comtrade',
      imageSrc: 'deadpool.png',
      location: 'Kragujevac'
    },
    {
      id: 3,
      name: 'Ivan',
      surname: 'Miletic',
      company: 'Comtrade',
      imageSrc: 'playboy.png',
      location: 'Cacak'
    }
  ];

  constructor() {}
  // constructor(private http: HttpClient) {}

  public getParticipants(): Observable<Participant[]> {
    return Observable.create(observer => {
      observer.next(this.hardCodeParticipants);
      observer.complete();
    }).delay(2000);
  }

  public deleteParticipant(
    participant: Participant
  ): Observable<Participant[]> {
    return Observable.create(observer => {
      setTimeout(() => {
        const deletedIndex = this.hardCodeParticipants.indexOf(participant);
        this.hardCodeParticipants.splice(deletedIndex, 1);
        observer.next(this.hardCodeParticipants);
        observer.complete();
      }, 0);
    });
  }

  public getParticipant(id: number): Observable<Participant> {
    return Observable.create(observer => {
      const part = this.hardCodeParticipants.filter(p => p.id === id);
      observer.next(part[0]);
      observer.complete();
    }).delay(500);
  }

  public saveParticipant(participant: Participant): Observable<Participant> {
    return Observable.create(observer => {
      const index = this.hardCodeParticipants.findIndex(p => p.id === participant.id);
      this.hardCodeParticipants[index] = participant;
      console.log(this.hardCodeParticipants);
      observer.next(participant);
      observer.complete();
    }).delay(500);
  }
}
