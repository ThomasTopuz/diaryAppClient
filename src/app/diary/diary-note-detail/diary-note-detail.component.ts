import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { DiaryService } from '../diary.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-diary-note-detail',
  templateUrl: './diary-note-detail.component.html',
  styleUrls: ['./diary-note-detail.component.css'],
  providers: [ToastrService],
})
export class DiaryNoteDetailComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly authenticationService: AuthenticationService,
    private readonly diaryService: DiaryService,
    private readonly router: Router,
    private readonly toaster: ToastrService
  ) {}

  noteId: number = null;
  user = null;
  noteContentField: FormControl = new FormControl('', [Validators.required]);
  note = null;
  loading = true;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.noteId = params['id'];
      this.diaryService
        .getDiaryNote(this.noteId.toString())
        .subscribe((data) => {
          this.note = data;
          this.noteContentField.setValue(data.content);
          this.loading = false;
        });
    });

    this.authenticationService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }

  onSumbit() {
    if (this.noteContentField.invalid)
      return this.noteContentField.markAsTouched();

    this.diaryService
      .putDiaryNote(this.noteContentField.value, this.note._id)
      .subscribe((data) => {
        this.toaster.success('note edited successfully', 'Edited!');
        this.goBack();
      });
  }

  goBack() {
    this.router.navigate(['diary']);
  }
}
