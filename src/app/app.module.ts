import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';/*for importing http client module */
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { freeApiService } from './services/freeapi.service'; /*importing service */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule /*for importing http client module */
  ],
  providers: [freeApiService],/*make available to all component in app aplication*/
  bootstrap: [AppComponent]
})
export class AppModule { }
