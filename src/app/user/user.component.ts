import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button> 

      {{id}}
    `
})
export class UserComponent implements OnDestroy {
  
  private subscription: Subscription;
  
  id: string;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    //Once when component is created
//    this.id = activatedRoute.snapshot.params['id']; 
    
    // subscribe pattern
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
      }
    );
  }
  
  onNavigate(){
    this.router.navigate(['/']);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
