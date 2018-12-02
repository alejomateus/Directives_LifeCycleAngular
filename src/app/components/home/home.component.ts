import { Component, OnInit,OnChanges,DoCheck,AfterContentChecked,AfterViewChecked,AfterViewInit,AfterContentInit,OnDestroy } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-class></app-class>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterViewChecked,AfterViewInit,AfterContentInit,OnDestroy  {
  constructor() {
    console.log("constructor")      
  }

  ngOnInit() {
    console.log("ngOnInit")    
  }

  ngOnChanges(){
    console.log("ngOnChanges")    
  }
  ngDoCheck(){
    console.log("ngDoCheck")    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")      
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")      
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")      
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")      
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")    
  }
}
