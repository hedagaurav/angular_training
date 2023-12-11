import { CommonModule } from '@angular/common';
import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';
import { IfdirectiveDirective } from '../directives/ifdirective.directive';


@Component({
  selector: 'app-form',
  standalone: true,
  
  imports: [CommonModule, FormsModule,HighlightDirective,IfdirectiveDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
  hostDirectives: []
})


export class FormComponent {
  // structural directive
  condition : boolean = false;
  
  change_condition() {
    if(this.condition){
      this.condition = false;
    }
    else{
      this.condition = true;
    }
  }
  // structural directive end

  // ng switch 
  currentcolor : string = '';
  // ng switch end

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
