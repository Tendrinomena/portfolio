import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  getData():Observable<any>{
    return this.http.get('/api/getData');
  }
  sendData(data: any):Observable<any>{
    console.log('send data', data);
    return this.http.post('/api/postData', data);
  }
  getOne(id:any):Observable<any>{
    return this.http.get('/api/getOne/'+`${id}`);
  }
}
