import { Component } from '@angular/core';
import { SearchFacade } from '../domain-logic/application/search.facade';
import { BookingDetails } from '../domain-logic/entities/booking-details';

@Component({
  selector: 'booking-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  firstname = '';
  name = 'Smith';
  bookingList$ = this.searchFacade.bookingList$;
  selectedBooking: BookingDetails | undefined;

  constructor(private searchFacade: SearchFacade) {}

  load(): void {
    this.searchFacade.load();
  }

  toggleSelection(b: BookingDetails) {
    this.selectedBooking = b;
  }
}
