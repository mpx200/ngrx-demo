import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Participant } from '../models/';
import 'rxjs/add/operator/delay';

@Injectable()
export class ParticipantsService {
  public hardCodeParticipants: Participant[] = [
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

  public getParticipants(): Observable<Participant[]> {
    return Observable.create(observer => {
      observer.next([...this.hardCodeParticipants]);
      observer.complete();
    }).delay(2000);
  }

  public deleteParticipant(
    participant: Participant
  ): Observable<Participant[]> {
    return Observable.create(observer => {
        const deletedIndex = this.hardCodeParticipants.indexOf(participant);
        const newArray = [...this.hardCodeParticipants];
        newArray.splice(deletedIndex, 1);
       this.hardCodeParticipants = newArray;
        observer.next(newArray);
        observer.complete();
    }).delay(100);
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
      const newList = [];
      this.hardCodeParticipants.forEach(p => {
        if (p.id === participant.id) {
           newList.push(participant);
        } else {
          newList.push(p);
        }
      });
      this.hardCodeParticipants = newList;
      observer.next(newList);
      observer.complete();
    }).delay(500);
  }
}
