import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { HomeComponent } from './components/core/home/home.component';
import { GraphicCardsComponent } from './components/pages/graphic-cards/graphic-cards.component';
import { GraphicCardItemComponent } from './components/pages/graphic-cards/graphic-card-item/graphic-card-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphicCommentsComponent } from './components/pages/graphic-cards/graphic-comments/graphic-comments.component';
import { GraphicFormComponent } from './components/pages/graphic-cards/graphic-form/graphic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraphicCardsComponent,
    GraphicCardItemComponent,
    GraphicCommentsComponent,
    GraphicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
