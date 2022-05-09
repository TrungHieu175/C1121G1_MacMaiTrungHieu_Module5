import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  r = 0;
  g = 0;
  b = 0;
  constructor() { }

  ngOnInit(): void {
  }
  rgb() {
    const styles = {
      'background-color': 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')',
    };
    return styles;

  }
}
