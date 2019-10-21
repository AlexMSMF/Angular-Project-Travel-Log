export class Next {
    public image: string;
    public title: string;
    public rating: number;
    public search: string;
   
    constructor(image: string, title: string,  rating: number, search: string) {
         this.image = image;
         this.title = title;
         this.rating = rating;
         this.search = search;
    }


    increment() {
        this.rating++;
    }

    decrement() {
        this.rating--;
    }


}