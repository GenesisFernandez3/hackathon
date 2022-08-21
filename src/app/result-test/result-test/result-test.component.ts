import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent implements OnInit {
  result = {
    "level" : [{
      "hades": {
        "categories" : [ "Diseno", "Liderazgo" ]
        },
      "hercules": {
          "categories" : [ "Backend", "Arquitectura" ]
        },
      "zeus": {
          "categories" : [ "FrontEnd" ]
        }
      }]
  }
 
  constructor() { }

  ngOnInit() {
  }

}
