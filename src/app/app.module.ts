import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DummyComponent } from './dummy/dummy.component';
import { AnotherdummyComponent } from './anotherdummy/anotherdummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyComponent,
    AnotherdummyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
