import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    CartSummaryComponent,
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
    CartSummaryComponent,
  ],
})
export class PartialsModule {}
