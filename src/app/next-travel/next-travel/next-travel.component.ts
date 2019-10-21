import { Component, OnInit } from '@angular/core';

import {Next} from '../next-travel/next-travel.model'

@Component({
  selector: 'app-next-travel',
  templateUrl: './next-travel.component.html',
  styleUrls: ['./next-travel.component.css']
})
export class NextTravelComponent implements OnInit {

  nextTravel: Next[] = [new Next('../../../assets/china.jpg', 'China', 0, 'https://www.google.com/travel/things-to-do?g2lb=2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4276661%2C4282066%2C4285990%2C4288815%2C4291318%2C4293482%2C4296667%2C4301054%2C4308216%2C4308984%2C4313006%2C4319428%2C4319578%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=pt&un=1&dest_mid=%2Fm%2F0d05w3&dest_src=ts&dest_state_type=main&sa=X&ved=2ahUKEwjbvMqwmqflAhUTA2MBHd7eCVcQ6tEBKAQwAHoECAkQBw#ttdm=31.554153_106.305337_4'),
  new Next('../../../assets/africa.jpg', 'South Africa', 0, 'https://www.google.com/travel/things-to-do?g2lb=2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4276661%2C4282066%2C4285990%2C4288815%2C4291318%2C4293482%2C4296667%2C4301054%2C4308216%2C4308984%2C4313006%2C4319428%2C4319578%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=pt&un=1&dest_mid=%2Fm%2F0hzlz&dest_src=ts&dest_state_type=main&sa=X&ved=2ahUKEwii2qfmmqflAhXm1uAKHWkrDIcQ6tEBKAQwAHoECAoQBw#ttdm=-31.201951_24.962986_5' ), 
  new Next('../../../assets/iran.jpg', 'Iran', 0, 'https://www.google.com/travel/things-to-do?g2lb=2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4276661%2C4282066%2C4285990%2C4288815%2C4291318%2C4293482%2C4296667%2C4301054%2C4308216%2C4308984%2C4313006%2C4319428%2C4319578%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=pt&un=1&dest_mid=%2Fm%2F03shp&dest_src=ts&dest_state_type=main&sa=X&ved=2ahUKEwi2oOn2mqflAhUHmBQKHVy8DpcQ6tEBKAQwAHoECAoQBw#ttdm=31.918939_51.989512_6')];



  constructor() { }

  ngOnInit() {

  }

  max: any;

  chooseTripNow() {
    this.max = this.nextTravel.reduce( (a, b) => a.rating > b.rating ? a : b );
      
    return this.max;
  }


}
