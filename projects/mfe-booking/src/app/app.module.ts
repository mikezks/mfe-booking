import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { MicroAppRoutingModule } from '@angular-architects/microapp';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./booking/booking.module')
      .then(esm => esm.BookingModule)
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MicroAppRoutingModule.forMicroApp({ name: 'booking' })
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector, private router: Router) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('ce-booking-root', ce);
  }
}
