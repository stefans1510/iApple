import { Injectable } from "@angular/core";
import { Phone } from "../model/phone";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MobileService {
    private baseUrl = ' http://localhost:3000/phones';

    constructor(private phone: Phone, private _httpClient: HttpClient) {
        this.phone = phone;
    }

    getPrice(numberOfPhones: number): number {
        this.phone.price = 1000;
        return this.phone.price * numberOfPhones;
    }

    public getPhones(): Observable<Phone[]> {
        return this._httpClient.get<any[]>(this.baseUrl).pipe(
            map((data: any[]) => data.map((item: any) => this._createPhoneFromObject(item)))
        );
    }
    

    public getPhone(id: number): Observable<Phone> {
        return this._httpClient.get(this.baseUrl + '/' + id).pipe(
            map((data: any) => this._createPhoneFromObject(data)),
        );
    }

    public createPhone(phone: Phone): Observable<Phone> {
        return this._httpClient.post(this.baseUrl, phone).pipe(
            map((data: any) => this._createPhoneFromObject(data)),
        );
    }

    public deletePhone(id: number): Observable<Phone> {
        return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
            map((data: any) => this._createPhoneFromObject(data)),
        );
    }

    private _createPhoneFromObject(item: any) {
        return new Phone(item.id, item.model, item.price);
    }
}