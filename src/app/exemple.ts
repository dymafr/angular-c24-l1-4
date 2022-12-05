import { Component } from "@angular/core";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent {
  log(val) {
    console.log(val);
  }
}
