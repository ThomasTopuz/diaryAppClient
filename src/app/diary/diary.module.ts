import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './diary.service';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


import {DataViewModule} from 'primeng/dataview';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ButtonModule} from 'primeng/button';

//material.angular
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [DiaryListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DataViewModule,
    ScrollingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule

  ],
  providers:[
    DiaryService
  ]
})
export class DiaryModule { }
