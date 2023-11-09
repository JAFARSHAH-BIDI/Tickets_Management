import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {MatTableModule , } from '@angular/material/table';


// import { MatPaginator } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCommonModule, MatLineModule, MatNativeDateModule, MatOptionModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    // MatTableDataSource,
    // MatPaginator,
    MatPaginatorModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    BrowserModule, FormsModule,
    MatButtonModule,
    
    // MatButtonToggleModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    MatCommonModule,
    // MatDatepickerModule,
    MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatGridListModule,
    // MatIconModule,
    MatInputModule,
    MatLineModule,
    // MatListModule,
    // MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    // MatRadioModule,
    MatRippleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
