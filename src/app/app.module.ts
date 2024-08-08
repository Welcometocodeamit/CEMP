import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { AssetCapacityTableComponent } from './Home/asset-capacity-table/asset-capacity-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { AssetAvailibliltyByTypeComponent } from './Home/asset-availiblilty-by-type/asset-availiblilty-by-type.component';
import { TotalCapacityPieComponent } from './Home/total-capacity-pie/total-capacity-pie.component';


@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      AssetCapacityTableComponent,
      AssetAvailibliltyByTypeComponent,
      TotalCapacityPieComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
