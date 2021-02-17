import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryService } from './diary.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { ToastrModule } from "ngx-toastr";
import {DataViewModule} from 'primeng/dataview';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

// material.angular
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DiaryNoteDetailComponent } from './diary-note-detail/diary-note-detail.component';


@NgModule({
  declarations: [DiaryListComponent, DiaryNoteDetailComponent],
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
    MatFormFieldModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    DialogModule,
    ContextMenuModule,
    DropdownModule,
    InputTextModule,
    ToastrModule.forRoot()

  ],
  providers:[
    DiaryService
  ]
})
export class DiaryModule { }
