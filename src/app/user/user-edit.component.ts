import { ComponentCanDeactivateCustom } from './user-edit.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()" >Go Home</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivateCustom {
  
  done:boolean = false;
  
  constructor(private router: Router) {}
  
  onNavigate() {
    this.router.navigate(['/']);
  }
  
  canDeactivateCustom(): Observable<boolean> | boolean {
    if(!this.done){
      return confirm('Do you want to leave?');
    }
    return true;
  }
  
}
