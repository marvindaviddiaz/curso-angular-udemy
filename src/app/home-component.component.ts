import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    
    Param Analytics: {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {

  private subscription: Subscription;

  param: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.param = queryParam['analytics'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
