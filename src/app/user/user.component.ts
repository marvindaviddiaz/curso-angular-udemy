import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button> 
      
      <br>
      <a [routerLink]="['/user/2/detail']" routerLinkActive="active">Navigate to User Detail Number Two</a>
      <br>
      <a [routerLink]="['/user/2/edit']" routerLinkActive="active">Navigate to User Edit Number Two</a>
      <br>
      ID: {{id}}
      <br>
      <router-outlet> </router-outlet>
      
    `
})
export class UserComponent implements OnDestroy {

  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //Once when component is created
    //    this.id = activatedRoute.snapshot.params['id'    
    // subscribe pattern
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
      }
    );
  }

  onNavigate() {
    this.router.navigate(['/'], { queryParams: { "analytics": 100 }, preserveQueryParams: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
