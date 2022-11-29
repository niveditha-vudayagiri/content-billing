import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ClientComponent } from './components/client/client.component';
import { AppRoutingModule } from './app-routing.module';
import { BillComponent } from './components/bill/bill.component';
import { HomeComponent } from './components/home/home.component';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientComponent,
    BillComponent,
    HomeComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
