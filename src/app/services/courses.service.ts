import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   BASE_URL:string = 'http://localhost:8000'
   constructor(private http:HttpClient) {
      
   }

  loadCourses():Observable<Course[]>{
    const params = new HttpParams()
       .set('page', 1)
       .set('pageSize', 10)
    return this.http.get<Course[]>(this.BASE_URL + "/api/courses", {params});
   }
   
}
