export class Travel {
    public title: string;
    public image: string;
    public memory: string;
    public date: string;
    public itinerary: string;
    public buddies: string;
   
    constructor(title: string, image: string, memory: string, date: string, itinerary: string, buddies: string) {
         this.title = title;
         this.image = image;
         this.memory = memory;
         this.date = date;
         this.itinerary = itinerary;
         this.buddies = buddies
    }
}