import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {             
    
    headers = new HttpHeaders({'Content-Type': 'application/json'});
     
    options = { headers: this.headers };

    serviceUrl: string;

    constructor(private http: HttpClient, private location: Location) {
                
        this.serviceUrl = 'http://127.0.0.1:8000/';        
        
        /* let currentUrl = location.path().toLowerCase();
        
        if(currentUrl == '' || currentUrl == undefined || currentUrl.indexOf('/arabic/') != -1){
            this.header.append('Accept-Language', 'ar');
        } else {
            this.header.append('Accept-Language', 'en');
        } */             
    }    

    public getAll () {
        return this.http.get(this.serviceUrl + "weather/");        
    }
    
    public getSingle(id:number) {
        return this.http.get(this.serviceUrl + id);
    }
    
    public add(itemToCreate:any) {
                
        var objectToSend = JSON.stringify(itemToCreate);                    

        return this.http.post(this.serviceUrl + "registration/", objectToSend, this.options);
    }

    public adds(itemToCreate:any) {
                
        var objectToSend = JSON.stringify(itemToCreate);                    

        return this.http.post(this.serviceUrl + "login/", objectToSend, this.options);
    }
    
    public update(itemToUpdate: any) {
        
        var objectToSend = JSON.stringify(itemToUpdate);
        
        return this.http.post(this.serviceUrl, objectToSend, this.options);                         
    }
    
    public delete(id: number) {
        return this.http.delete(this.serviceUrl + id, this.options);
    }
} 
