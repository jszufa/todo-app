import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  dropDownVisible = true;

  toggleDropdownMenu () {
    this.dropDownVisible = !this.dropDownVisible;
  }
}
