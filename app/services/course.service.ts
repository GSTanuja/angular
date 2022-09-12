import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

courses:Course[]=[
  new Course('Java',1000,'programming','backend','offline','Sri'),
  new Course('Angular',2000,'web','frontend','online','Priya'),
  new Course('Spring',1000,'programming','frontend','offline'),
  new Course('Cucumber',1500,'Testing','automation','offline','Poorvi'),
  new Course('Selenium',2500,'Testing','manual','online','Sumith'),
  new Course('AWS',3500,'cloud computing','devops','online','Kushal'),
]
  constructor() { }

  getCourses=()=>{
    return this.courses;
  }
}
