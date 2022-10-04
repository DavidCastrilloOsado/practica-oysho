import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogoModule } from '../app/pages/catalogo/catalogo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    CatalogoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
