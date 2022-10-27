import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TransformDataToProductsComponent } from './shared/helpers/transform-data-to-products/transform-data-to-products.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [TransformDataToProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
