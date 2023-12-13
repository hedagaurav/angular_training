import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewEncapsulationComponent } from '../view-encapsulation/view-encapsulation.component';
import { FormComponent } from '../form/form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FormComponent,ViewEncapsulationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(ViewEncapsulationComponent)
  viewEn!: ViewEncapsulationComponent;

  @ViewChild('para')
  para! : ElementRef

  constructor(private logger : LoggerService){
    
  }
  ngAfterViewInit() {
    this.viewEn.para1.nativeElement.style.backgroundColor = 'yellow';
    this.para.nativeElement.style.color='red';
  
  }

  logmessage(){
    this.logger.log('this service is for logging messages.')
  }
}
