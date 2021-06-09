import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

//  define decorator to access parent property as a prop in child
  @Input() hero
  @Input() myDataObj;
  @Output() parentComponent:EventEmitter<any> = new EventEmitter()
  // @Input() usersData;

  
  constructor() { }

  ngOnInit() {
    // console.log(this.hero,this.myDataObj)
    // this.parentComponent.emit({name:"taha", age: 25})
  }
sendData() {
  let item = {name:"taha", age: 25}
  this.parentComponent.emit(item)
}
}
