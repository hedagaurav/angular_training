import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
})
export class ViewEncapsulationComponent {

  count : number = 0;
  @ViewChild('para1')
  para1! : ElementRef
  
}
