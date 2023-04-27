import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvReaderComponent } from './components/csv-reader/csv-reader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'angular2-chartjs';



@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgChartsModule,
    ChartModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: Storage, useValue: localStorage }],
  exports: [MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
