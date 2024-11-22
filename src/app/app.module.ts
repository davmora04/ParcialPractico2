import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnimeModule } from './anime/anime.module';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AnimeModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
