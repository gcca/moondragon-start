import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h3>Hello {{name}}</h3>`,
})
export class AppComponent  { name = 'MoonDragon'; }
