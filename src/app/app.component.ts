import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  name !: string;
  age!: string;

  constructor(private service: AppService){}

  ngOnInit(){
    this.getDataFromApi();
    this.getOneData(1);
  }

  getDataFromApi(){
    this.service.getData().subscribe((data)=>{
      console.log("data from api: ", data);
    }, (error)=>{
      console.log(error);
    });
  }

  getOneData(id:any){
    this.service.getOne(id).subscribe((res)=>{
      console.log("response from api: ", res);
    })
  }

  onSubmit(){
    console.log(this.age, this.name);
    const data = {
      'name': this.name,
      'age': this.age
    }
     this.service.sendData(data).subscribe((res)=>{
       console.log('data returning by node', res);
     })

     console.log("here");

  }
}
