export class Recommendations {
    recommTitle: string;
    recommDescription: string;
    recommPrice: string;

    constructor (recommTitle: string, recommDescription: string, recommPrice: string) {
        this.recommTitle = recommTitle;
        this.recommDescription = recommDescription;
        this.recommPrice = recommPrice;
    }
}