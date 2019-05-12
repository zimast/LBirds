import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BirdComponent } from './bird/bird.component';
import { BirdRadioOptionsComponent } from './bird-radio-options/bird-radio-options.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BirdComponent,
    BirdRadioOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
