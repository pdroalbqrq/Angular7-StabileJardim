import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
})
export class MaterialModule { }
