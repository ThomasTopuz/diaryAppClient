import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {
  user = null;
  diaryNotes = null;
  loading: boolean;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly authenticationService: AuthenticationService,
    private readonly diaryService: DiaryService
  ) { }

  ngOnInit() {
    this.loading = true;
    const userId = this.route.snapshot.paramMap.get('id');
    this.diaryService.getUserById(userId)
    .subscribe((data)=>{
      this.user = data;
    });



    this.diaryService.getDiaryNotes()
    .subscribe((data)=>{
      this.diaryNotes = data;
      this.loading = false;
    });
  }

}
