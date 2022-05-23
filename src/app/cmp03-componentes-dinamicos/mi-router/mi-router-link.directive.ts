import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

@Directive({
  selector: '[appMiRouterLink]'
})
export class MiRouterLinkDirective {

  @Input('appMiRouterLink') path: string = '/';

  @HostBinding('style') styles = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer'
  }

  @HostBinding('style.marginRight') margin = '10px';

  constructor(
    private miRouterService: MiRouterService
  ) { }

  @HostListener('click') onClick() {
    this.miRouterService.navigateByUrl(this.path);
  }

}
