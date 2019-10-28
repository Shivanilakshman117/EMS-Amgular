import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatCheckboxModule,MatDatepickerModule,MatNativeDateModule, 
 MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatDatepickerModule,
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatCheckboxModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatNativeDateModule
   ],
})
export class CustomMaterialModule { }