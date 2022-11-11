import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module')
      .then(esm => esm.BookingModule)
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
