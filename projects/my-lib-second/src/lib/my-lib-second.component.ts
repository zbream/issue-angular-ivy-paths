import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-second',
  template: `
    <p>
      my-lib-second works!
    </p>
  `,
  styles: []
})
export class MyLibSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
