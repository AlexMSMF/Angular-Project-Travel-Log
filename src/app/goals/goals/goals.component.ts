import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  countryName: string = 'Australia';

textAreaContent: Array<string> = [];

  textValue: string;
  

objective1: string;
objective2: string;
objective3: string;

checked = false;

checkButton = false;
checkButton1 = false;
checkButton2 = false;

text:string;


  addReminder(value) {
    value = this.textValue;
    this.textAreaContent.push(value);
  }

  mainObj () {
    this.checked = true;
    this.checkButton = true;
    this.checkButton1 = false;
    this.checkButton2 = false;
    this.text = this.objective1;
    return this.text;
  }

  mainObj1 () {
    this.checked = true;
    this.checkButton1 = true;
    this.checkButton = false;
    this.checkButton2 = false;
    this.text = this.objective2;
    return this.text;
  }

  mainObj2 () {
    this.checked = true;
    this.checkButton2 = true;
    this.checkButton = false;
    this.checkButton1 = false;
    this.text = this.objective3;
    return this.text;
  }




  constructor() { }

  ngOnInit() {
  }

}
