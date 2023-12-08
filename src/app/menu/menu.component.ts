import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input('olduser') username : string | undefined;
    counter : number = 0;
    count(): void {
      this.counter++;
    }
}
