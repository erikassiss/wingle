import { Component, Input } from '@angular/core';

@Component({
  selector: 'wingle-checkbox',
  templateUrl: './wingle-checkbox.component.html',
  styleUrls: ['./wingle-checkbox.component.css']
})
export class WingleCheckboxComponent {
  @Input() isChecked: boolean;
  @Input() isDisabled: boolean;

  constructor() { }
}
