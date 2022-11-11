import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingDomainModule } from '../domain-logic/booking-domain.module';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [
    CommonModule,
    BookingDomainModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EditComponent
      }
    ])
  ],
  declarations: [EditComponent],
  exports: [EditComponent],
})
export class BookingFeatureEditModule {}
