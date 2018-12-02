import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  alerta:string="alert-danger";
  properties:Object={
    danger:false
  }
  loading:boolean= false;
  constructor() { }

  ngOnInit() {
  }
  eject(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
