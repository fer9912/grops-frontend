import { AirportModel } from "src/app/model/airport.model";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
@Injectable({
    providedIn: "root"
  })
export class AirportService{ 
    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/airport';
   
    constructor(private http: HttpClient) {}

    getAirports(): Observable<AirportModel[]>{
        return this.http.get<AirportModel[]>(this.url + '/getAll');
    }

    getAirportsNear(origin : string): Observable<AirportModel[]>{
      return this.http.get<AirportModel[]>(this.url + '/getNear?origin='+ origin);
  }
}