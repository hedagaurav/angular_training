import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    username : string = "gaurav heda";
    isButtonDisabled: boolean = false;

    disable_me(): void {
      this.isButtonDisabled = true;
    }
}
