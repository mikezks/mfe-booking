import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BookingDetails } from '../entities/booking-details';
import { BookingDataService } from '../infrastructure/booking.data.service';


@Injectable({ providedIn: 'root' })
export class SearchFacade {

  private bookingListSubject = new BehaviorSubject<BookingDetails[]>([]);
  bookingList$ = this.bookingListSubject.asObservable();

  constructor(private bookingDataService: BookingDataService) {
  }

  load(): void {
    this.bookingDataService.load().subscribe({
      next: bookingList => {
        this.bookingListSubject.next(bookingList)
      },
      error: err => {
        console.error('err', err);
      }
    });
  }
}
