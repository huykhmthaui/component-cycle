import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encap',
  templateUrl: './view-encap.component.html',
  styles: ['p{color: blue}'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ViewEncapComponent {

}
