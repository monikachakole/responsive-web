import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReviewComponent } from './review/review.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, ReviewComponent, ScreenshotsComponent, AboutPageComponent, AboutUsComponent, FeaturesComponent, PricingComponent, DownloadAppComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
