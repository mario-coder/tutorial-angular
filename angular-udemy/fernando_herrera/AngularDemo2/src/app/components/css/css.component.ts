import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-css",
  template: `
    <h1>CSS</h1>
    <p>
      css works!
    </p>
    <br>
    <hr>
  `,
  styles: [
    `
      p {
        color: red;
        font-size: 20px;
      }
    `
  ]
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
