import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DncModalComponent } from './dnc-modal/dnc-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dnc-modal app';

  courses: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    this.loadData<{ id: string, title: string, description: string, duration: string, instructor: string, category: string }[]>('courses.json', data => this.courses = data);
  }

  onUpdate(course:any) { }
  onDelete(course:any) { }
  onAdd() { }

  private loadData<T>(url: string, callback: (data: T) => void): void {
    this.http.get<T>(url).subscribe(callback, error => console.error(`Error loading data from ${url}:`, error));
  }


  //DNC Modals 

  @ViewChild('updateCourseModal') updateCourseModal!: DncModalComponent;
  @ViewChild('AddCourseModal') AddCourseModal!: DncModalComponent;
  @ViewChild('confirmModal') confirmModal!: DncModalComponent;

  showAddModal() {
    this.AddCourseModal.show();
  }

  hideAddModal() {
    this.AddCourseModal.hide();
  }

  createCourse() {
    // call api for example with the collected data
  }

  hideUpdateModal() {
    this.updateCourseModal.hide();
  }

  showUpdateModal() {
    this.updateCourseModal.show();
  }


  showConfirmModal() {
    this.confirmModal.show();
  }

  hideConfirmModal() {
    this.confirmModal.hide();
  }

  onModalClose() {
    console.log('Modal has been closed.');
  }
}
