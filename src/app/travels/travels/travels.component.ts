import { Component, OnInit } from '@angular/core'

import {Travel} from '../travel-item.model'

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  travels: Travel[] = [];

value: string;


  constructor() { }

  ngOnInit() {
    this.travels =  [new Travel('Portugal', '../../../assets/travel-hd-2560x1440.jpg', 'That Afternoon at the Beach', '01/07/2019 until 15/07/2019', 'Lisbon-Sines-Portimão', 'Ana' ),
    new Travel('Spain', '../../../assets/spain.jpg', 'Park guell visit', '15/09/2018 until 25/09/2018', 'Madrid-Barcelona', 'João' ),
    new Travel('Italy', '../../../assets/italy.jpg', 'The Amalfi Coast', '10/02/2017 until 20/02/2017', 'Rome-Napoli-Sardena', 'Ana' ),
    new Travel('USA', '../../../assets/271244.jpg', 'The Big Sur', '01/06/2015 until 15/06/2015', 'Los Angeles, San Francisco, Las Vegas', 'Vasco, Gonçalo' ),
    new Travel('Thailand', '../../../assets/thai.jpg', 'Phuket', '15/08/2014 until 31/08/2014', 'Bangkok, Chiang May, Phuket, Krabi', 'Ana, João, Miguel' ),
    new Travel('Brasil', '../../../assets/brasil.jpg', ' Corcovado', '15/08/2013 until 31/08/2013', 'Rio de Janeiro, Buzios, São Paulo', 'Ana, João, Miguel' ),
  ]
  }

  searchTravel() {
 this.travels = this.travels.filter((tr) => {
   if(tr.title.toLowerCase() == this.value.toLowerCase()) {
     return tr;
   } 
    });
  }



}
