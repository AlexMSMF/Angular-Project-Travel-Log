import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, OnDestroy {

  country: string = 'Japan';
  quotes: Array<any> = [["Don't forget to be polite"], ["Currency is the Japanese Yen"], ["Kudasai means Please"], ["Arigatoo-gozaimazou it's a polite way to say thank you"], ["Biggest cities are Tokyo and Kyoto"], ["Japan has more than 6000 islands"]];

  passportStatus: string = '(Missing)';
  visaStatus: string = '(Missing)';
  ticketStatus: string = '(Missing)';
  randomString: string = "Japan - Nippon";

  todoList: string;

  todos = [ {
    name: '',
    completed: false
  }];

  showTodo: boolean = false;


  constructor() { }

  
  ngOnInit() {
  }

  randomFact() {
    this.randomString =  this.quotes[Math.floor(Math.random() * this.quotes.length)];
    
    }

  addTodo(newTodo) {
    this.showTodo = true;
    let anotherTodo = {
      name: newTodo,
      completed:false
    }
    this.todos.push(anotherTodo);
    
  }

  

  changeStatusPassport() {
    return this.passportStatus = '(Done)';
   }
 
   changeStatusVisa() {
     return this.visaStatus = '(Done)';
    
    }
 
    changeStatusTicket() {
     return this.ticketStatus = '(Done)';
    }
   

  changeColor() {
   return this.passportStatus === '(Done)' ? 'green' : 'red';
  }

  changeColor1() {
   return this.visaStatus === '(Done)' ? 'green' : 'red';
  }

  changeColor2() {
   return this.ticketStatus === '(Done)' ? 'green' : 'red';
  }

  ngOnDestroy() {

  }





}
