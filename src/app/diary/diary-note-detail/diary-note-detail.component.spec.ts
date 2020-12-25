import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteDetailComponent } from './diary-note-detail.component';

describe('DiaryNoteDetailComponent', () => {
  let component: DiaryNoteDetailComponent;
  let fixture: ComponentFixture<DiaryNoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryNoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
