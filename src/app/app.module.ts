import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvReaderComponent } from './components/csv-reader/csv-reader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LocalStorageModule } from 'angular-2-local-storage';



@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
