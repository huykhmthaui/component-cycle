import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() userName = "";
  // @ViewChild('wrapper') wrapper!: ElementRef;
  // @ContentChild('contentWrapper') content!: ElementRef;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Value have changed', changes);
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit from child component')
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck triggered');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit - wrapper', this.wrapper);
  //   console.log('ngAfterContentInit - \'contentWrapper', this.content);
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked triggered');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit - wrapper', this.wrapper);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked triggered');
  // }

  // ngOnDestroy(): void {
  //   console.log('Child component is destroyed!? You killed a child!!?');
  // }

}
