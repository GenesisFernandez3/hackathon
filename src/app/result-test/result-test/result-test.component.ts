import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent implements OnInit {
  levels = ["Diseno", "FrontEnd", "BackEnd", "Arquitectura", "Liderazgo"];
  result = {
      "diseno": "hades",
      "liderazgo": "hades",
      "backend": "hercules",
      "arquitectura": "hercules",
      "frontend": "seuz"     
  };
 
  constructor() { }

  ngOnInit() {
  }

}
