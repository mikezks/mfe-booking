import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';


const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        loadChildren: () => import('./feature-search/booking-feature-search.module')
          .then(esm => esm.BookingFeatureSearchModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./feature-edit/booking-feature-edit.module')
          .then(esm => esm.BookingFeatureEditModule)
      }
    ]
  }
];


@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
