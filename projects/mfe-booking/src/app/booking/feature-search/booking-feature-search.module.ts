import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { SearchComponent } from './search.component';
import { BookingDomainModule } from '../domain-logic/booking-domain.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SearchComponent
      }
    ]),
    ReactiveComponentModule,
    BookingDomainModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class BookingFeatureSearchModule {}
