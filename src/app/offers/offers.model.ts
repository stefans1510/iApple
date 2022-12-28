export class Offers {
    offerTitle: string;
    offerDescription: string;
    offerExpiration: string;

    constructor(title: string, description: string, expirationDate: string) {
        this.offerTitle = title;
        this.offerDescription = description;
        this.offerExpiration = expirationDate;
    }
}