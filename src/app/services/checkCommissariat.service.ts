import { CheckCommissariatModel } from "src/app/model/checkCommissariat.model";
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
export class CheckCommissariatService{

    url: string = 'https://grops-backend-dnj2km2huq-rj.a.run.app/checkCommissariat';
   
    constructor(private http: HttpClient) {}

    getCheckCommissariat(id: string): Observable<CheckCommissariatModel>{
        return this.http.get<CheckCommissariatModel>(this.url + '/get?id=' + id);
    }

    saveCheckCommissariat(checkCommissariatModel: CheckCommissariatModel): Observable<CheckCommissariatModel>{
      return this.http.post<CheckCommissariatModel>(this.url + '/save',checkCommissariatModel, httpOptions);
  }

}