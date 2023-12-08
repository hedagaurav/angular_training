import { CommonModule } from '@angular/common';
import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';


@Component({
  selector: 'app-form',
  standalone: true,
  
  imports: [CommonModule, FormsModule,HighlightDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
  hostDirectives: []
})


export class FormComponent {
  // @Input('appHighlight') highlight : string = 'yellow';
  


  buttonclass : string = "btn";
  borderclass : string = "border"

  firstname : string = "";
  lastname : string = "";
  filled : boolean = false;

  borderred : string = 'border-red'; 
  // fullname : string = this.firstname + " " + this.lastname;

  submit() : void{
    console.log("clicked submit");
    console.log(this.firstname);
    console.log(this.lastname);
  };

  colorstatus : boolean = false;
  colorme() {
    return this.colorstatus ? 
    {
      background: 'lightcoral'
    } : 
    {
      background: 'lightsalmon'
    };
  }

  changecolor() {
    this.colorstatus = !this.colorstatus;
  }
}
