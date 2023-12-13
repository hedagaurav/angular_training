import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  @ViewChild('nameform') form! : NgForm;

  formsubmit(){
    console.log('form submit', this.form);
  }
}
