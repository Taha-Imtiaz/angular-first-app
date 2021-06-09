import { Component } from '@angular/core';

@Component({
  // component name in root
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = "Taha Imtiaz"
  currentVal = ""
  myName = "Daniyal"
  disabledBox = true
  myNewName = ""

  // video # 23 
  currentNmae = "Taha"
  todayDate = new Date()
  // on the basis of show If block should be visible
  // show = false
  // show = true
  // show = "yes"
  // show = "red"
  show = "blue"
  str = "Hello Taha"
  currencyValue = 10

  // switch case angular
  // color = "red"
  color = "green"
  // color = "red"

  // for loop angular
  // array
  data = ['taha', 'daniyal', 'haris', 'areeb']

  // array of objects
  dataArr = [{
    name: 'taha',
    age: 25,
    email: "taha@gmail.com"
  },
  {
    name: 'daniyal',
    age: 22,
    email: "daniyal@gmail.com"

  }, {
    name: 'haris',
    age: 35,
    email: "haris@gmail.com"

  },
  {
    name: 'areeb',
    age: 20,
    email: "areeb@gmail.com"

  },
  ]

  // video #17
  myDynamicColor = "orange"
  error = true

  // video# 20
  myData = "haris"
  dataObj = {
    name: "ali",
    age: 25

  }
  // video #21
  users = [
    {
      name: "ali",
      age: 25

    },
    {
      name: "daniyal",
      age: 42

    },
    {
      name: "zubair",
      age: 25

    }
  ]

  // Functions
  getMyName() {
    // return "Taha"
    // access name variable of a class
    return this.name
  }

  // objects
  obj = {
    name: "peter",
    age: 20
  }
  // Arrays
  arr = ['hasan', 'Daniyal', 'Haris']
  a = 100
  b = 200
  url = window.location.href

  getName(name: any) {
    alert(name)
  }
  customEvent(event: any) {
    console.warn(event)
  }
  getValue(event) {
    // const { target } = event
    // if (target) {
    //   console.log(target.value);
    console.log(event)
    this.currentVal = event
    // }
  }


  enableBox() {
    this.disabledBox = false
  }
  // video # 15 (forms)
  getUserValue(values) {
    console.log(values)
  }

  // video # 17
  changeColor() {
    this.myDynamicColor = "blue"
  }

  // video #22
  parentComponent(data) {
    console.log(data)
    this.myNewName = data.name
  }
}

