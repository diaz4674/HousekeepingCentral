import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { BoardDisplayComponent } from './board-display/board-display.component';
import { HotelRatesComponent } from './hotel-rates/hotel-rates.component';
import { HousekeepingCentralComponent } from './housekeeping-central/housekeeping-central.component';
@NgModule({
	declarations: [
		AppComponent,
		BoardDisplayComponent,
		HotelRatesComponent,
		HousekeepingCentralComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		HttpClientModule,
		MatCardModule,
		MatDividerModule,
		MatTableModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
