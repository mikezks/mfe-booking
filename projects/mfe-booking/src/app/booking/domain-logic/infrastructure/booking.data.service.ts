import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from '../entities/booking';
import { BookingDetails } from '../entities/booking-details';


@Injectable({ providedIn: 'root' })
export class BookingDataService {
  private bookings: Booking[] = [
    { id: 1, flightId: 3, passengerId: 2900 },
    { id: 2, flightId: 3, passengerId: 2924 },
    { id: 3, flightId: 4, passengerId: 2900 },
    { id: 4, flightId: 4, passengerId: 3068 },
    { id: 5, flightId: 5, passengerId: 2924 },
    { id: 6, flightId: 5, passengerId: 3068 }
  ];

  constructor(private http: HttpClient) {
  }

  load(): Observable<BookingDetails[]> {
    return of([
      {
        id: 1,
        passengerName: 'Smith, Emma',
        flightName: 'Hamburg - Graz',
        date: '19.10.2022 11:57:14'
      },
      {
        id: 2,
        passengerName: 'Smith, Mia',
        flightName: 'Hamburg - Graz',
        date: '19.10.2022 11:57:14'
      },
      {
        id: 3,
        passengerName: 'Smith, Emma',
        flightName: 'Hamburg - Graz',
        date: '20.10.2022 11:57:14'
      },
      {
        id: 4,
        passengerName: 'Smith, Ben',
        flightName: 'Hamburg - Graz',
        date: '20.10.2022 11:57:14'
      },
      {
        id: 5,
        passengerName: 'Smith, Mia',
        flightName: 'Hamburg - Graz',
        date: '21.10.2022 11:57:14'
      },
      {
        id: 6,
        passengerName: 'Smith, Ben',
        flightName: 'Hamburg - Graz',
        date: '21.10.2022 11:57:14'
      },
    ]);
  }
}
