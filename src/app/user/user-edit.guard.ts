
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivateCustom {

  canDeactivateCustom: () => boolean | Observable<boolean>;

}


export class UserEditGuard implements CanDeactivate<ComponentCanDeactivateCustom> {

  canDeactivate(component: ComponentCanDeactivateCustom): Observable<boolean> | boolean {
    return component.canDeactivateCustom ? component.canDeactivateCustom() : true;
  }

}