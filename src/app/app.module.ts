import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as alasql from 'alasql';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PipesModule } from 'w-ng5';
import 'alasql';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SplashComponent } from './splash/splash.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

 
FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
          SplashComponent,
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    NgApexchartsModule,
   NgxMaskModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    PdfViewerModule,
  InfiniteScrollModule,
  ImageCropperModule,
NgxSpinnerModule,PipesModule,
FullCalendarModule,
NgxMaskModule.forRoot(), ],
  providers: [   HttpClientModule,{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
