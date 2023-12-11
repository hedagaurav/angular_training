import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { IfdirectiveDirective } from './directives/ifdirective.directive';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { LoggerService } from './service/logger.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent, FormComponent,ViewEncapsulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular_training';

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
