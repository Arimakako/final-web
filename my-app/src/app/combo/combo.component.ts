// // import { Component } from '@angular/core';
// // import { ComboAPIService } from '../combo-api.service';

// // @Component({
// //   selector: 'app-combo',
// //   templateUrl: './combo.component.html',
// //   styleUrls: ['./combo.component.css']
// // })
// // export class ComboComponent {
// //   combos:any;
// // errMessage:string=''
// // constructor(public _service: ComboAPIService){
// // this._service.getCombos().subscribe({
// // next:(data)=>{this.combos=data},
// // error:(err)=>{this.errMessage=err}
// // })
// // } 

// // }
// import { Component } from '@angular/core';
// import { ComboAPIService } from '../combo-api.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import {ComboClientService} from '../combo-client.service';
// @Component({
// selector: 'app-combo',
// templateUrl: './combo.component.html',
// styleUrls: ['./combo.component.css']
// })
// export class ComboComponent {
// combos:any;
// errMessage:string=''
// constructor(public _service: ComboClientService, private _router: Router, private _activeRoute: ActivatedRoute){
//   this.getCombos() // auto get all fashions
//   this._activeRoute.params.subscribe(params => {
//   })
// }

// // get all fashions
// getCombos() {
//   this._service.getCombos().subscribe({
//     next: (data) => { this.combos = data},
//     error: (err) => { this.errMessage = err }
//   })
// }
// //   this._service.getCombos().subscribe({
// // next:(data)=>{this.combos=data},
// // error:(err)=>{this.errMessage=err}
// // })
// }

import { Component } from '@angular/core';
import { ComboAPIService } from '../combo-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ComboClientService} from '../combo-client.service';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
  })
export class ComboComponent {
  combos: any;
  name: string ='';
  // productcateunique: string[] = [];
  page: number = 1;
  // count: number =0;
  // tableSize: number=9;
  // tableSizes: any = [5,10,15,20];
  errMessage: string = ''
  constructor(public _service: ComboClientService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getCombos()
    this.page = 1
    
}
  ngOnInit():void{
this.getCombos();

  }

  onChange(e: any): void{
      if (e)
        this.page = e;
  }
  getCombos() {
    this._service.getCombos().subscribe((response)=>
    {
      this.combos=response;
      console.log(this.combos)
    })
  }
}