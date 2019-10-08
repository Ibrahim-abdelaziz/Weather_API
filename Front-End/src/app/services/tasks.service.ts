import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import { ApiService } from './APIService';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  
  constructor(private http: HttpClient, private _SharedService: ApiService) { 
  }
  
getWeather(){
  return this._SharedService.getAll();  
}

CreateUser(register){
   return this._SharedService.add(register);
}

Login(login){
  return this._SharedService.adds(login);
}

updateClients(clientModel:any){
  return this._SharedService.update(clientModel);
}

removeClients(id:number){
  return this._SharedService.delete(id);
}

}
