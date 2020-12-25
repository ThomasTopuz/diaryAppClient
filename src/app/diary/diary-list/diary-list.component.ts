import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { DiaryService } from '../diary.service';
import { Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css'],
  providers: [ToastrService],
})
export class DiaryListComponent implements OnInit {
  user = null;
  diaryNotes = null;
  loading: boolean;
  newNoteContent = new FormControl('', [Validators.required]);

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly diaryService: DiaryService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.authenticationService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
    this.loadDiaryNotes();
  }

  deleteDiaryNote(_id: string) {
    this.diaryService.deleteDiaryNote(_id).subscribe((data) => {
      this.showSuccess('Deleted!', 'diary note deleted successfully');
      this.loadDiaryNotes();
    });
  }

  editDiaryNote(_id: string) {
    this.router.navigate(['diary/detail', _id]);
  }

  createDiaryNote() {
    if (this.newNoteContent.invalid) {
      this.newNoteContent.markAsTouched;
      return;
    }
    this.diaryService
      .createDiaryNote(this.newNoteContent.value)
      .subscribe((data) => {
        this.loadDiaryNotes();
        this.newNoteContent.reset();
        this.showSuccess('Created!', 'diary note created successfully');
      });
  }

  loadDiaryNotes() {
    this.diaryService.getDiaryNotes().subscribe((data) => {
      this.diaryNotes = data;
      this.loading = false;
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  showSuccess(summary: string, detail: string) {
    this.toastr.success(detail, summary);
  }
}
