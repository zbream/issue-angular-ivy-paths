import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-first',
  template: `
    <p>
      my-lib-first works!
    </p>
  `,
  styles: []
})
export class MyLibFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
