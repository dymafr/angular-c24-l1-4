import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-exemple-component',
  templateUrl: 'exemple.html',
  styleUrls: ['exemple.scss'],
})
export class ExempleComponent {
  log(val: MatTabChangeEvent) {
    console.log(val);
  }
}
