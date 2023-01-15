import { Injectable } from "@angular/core";
import { Phone } from "../model/phone";

@Injectable()
export class MobileService {
    constructor (private phone : Phone) {
        this.phone = phone;
    }

    getPrice(numberOfPhones: number): number {
        this.phone.price = 1000;
        return this.phone.price * numberOfPhones;
    }
}