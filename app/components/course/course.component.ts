import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
 courses:Course[]=[]
  constructor(private _courseService:CourseService) { }

  ngOnInit(): void {
    this.courses=this._courseService.getCourses();
  }

}
