// // import { Component } from '@angular/core';
// // import { ComboAPIService } from '../combo-api.service';
// // import { Combo } from '../combo';
// // import { ActivatedRoute, Router } from '@angular/router';

// // @Component({
// //   selector: 'app-combo-update',
// //   templateUrl: './combo-update.component.html',
// //   styleUrls: ['./combo-update.component.css']
// // })
// // export class ComboUpdateComponent {
// //   combo = new Combo();
// //   combos: any;
// //   errMessage: string = ''
// //   constructor(private _service: ComboAPIService, private router: Router, private activateRoute: ActivatedRoute) {
// //     activateRoute.paramMap.subscribe((param) => {
// //       let id = param.get('id');
// //       if (id != null) {
// //         this.searchCombo(id);
// //       }
// //     });
// //   }
// //   public setCombo(f: Combo) {
// //     this.combo = f
// //   }
// //   searchCombo(Id: string) {
// //     this._service.getCombos().subscribe({
// //       next: (data) => {
// //         this.combo = data;
// //       },
// //       error: (err) => {
// //         this.errMessage = err;
// //       },
// //     });
// //   }
// //   putCombo() {
// //     this._service.putCombo(this.combo).subscribe({
// //       next: (data) => { this.combos = data },
// //       error: (err) => { this.errMessage = err }
// //     })
// //     alert('Edit combo success');
// //     this.goBack();
// //   }
// //   goBack() {
// //     this.router.navigate(['/admincombo']);
// //   }
// //   onFileSelected(event: any, combo: Combo) {
// //     let me = this;
// //     let file = event.target.files[0];
// //     let reader = new FileReader();
// //     reader.readAsDataURL(file);
// //     reader.onload = function () {
// //       combo.img = reader.result!.toString();
// //     };
// //     reader.onerror = function (error) {
// //       console.log('Error: ', error);
// //     };
// //   };
// //   }

// // // import { Component } from '@angular/core';
// // // import { ActivatedRoute, Router } from '@angular/router';
// // // import { Combo } from '../combo';
// // // import { ComboApiService } from '../combo-api.service';
// // // // import {AngularEditorConfig} from '@kolkov/angular-editor'
// // // @Component({
// // //     selector: 'app-combo-update',
// // //     templateUrl: './combo-update.component.html',
// // //     styleUrls: ['./combo-update.component.css']
// // //   })
// // // export class ComboUpdateComponent {
// // //   combo = new Combo();
// // //   combos: any;
// // //   errMessage: string = ''
// // //   constructor(private _service: ComboApiService, private router: Router, private activateRoute: ActivatedRoute) {
// // //     activateRoute.paramMap.subscribe((param) => {
// // //       let id = param.get('id');
// // //       if (id != null) {
// // //         this.searchCombo(id);
// // //       }
// // //     });
// // //   }
// // //   public setCombo(f: Combo) {
// // //     this.combo = f
// // //   }
// // //   searchCombo(Id: string) {
// // //     this._service.getCombo(Id).subscribe({
// // //       next: (data) => {
// // //         this.combo = data;
// // //       },
// // //       error: (err) => {
// // //         this.errMessage = err;
// // //       },
// // //     });
// // //   }
// // //   putCombo() {
// // //     this._service.putCombo(this.combo).subscribe({
// // //       next: (data) => { this.combos = data },
// // //       error: (err) => { this.errMessage = err }
// // //     })
// // //     alert('Edit combo success');
// // //     this.goBack();
// // //   }
// // //   goBack() {
// // //     this.router.navigate(['admincombo']);
// // //   }
// // //   onFileSelected(event: any, combo: Combo) {
// // //     let me = this;
// // //     let file = event.target.files[0];
// // //     let reader = new FileReader();
// // //     reader.readAsDataURL(file);
// // //     reader.onload = function () {
// // //       combo.img = reader.result!.toString();
// // //     };
// // //     reader.onerror = function (error) {
// // //       console.log('Error: ', error);
// // //     };
// // //   };
// // //   // config: AngularEditorConfig = {
// // //   //   editable: true,
// // //   //   spellcheck: true,
// // //   //   height: '15rem',
// // //   //   minHeight: '5rem',
// // //   //   placeholder: 'Enter text here...',
// // //   //   translate: 'no',
// // //   //   defaultParagraphSeparator: 'p',
// // //   //   defaultFontName: 'Arial',
   
// // //   // };
  
// // // }

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from '../combo';
import { ComboAPIService } from '../combo-api.service';
// import {AngularEditorConfig} from '@kolkov/angular-editor'
@Component({
    selector: 'app-combo-update',
    templateUrl: './combo-update.component.html',
    styleUrls: ['./combo-update.component.css']
  })
export class ComboUpdateComponent {
  combo = new Combo();
  combos: any;
  errMessage: string = ''
  constructor(private _service: ComboAPIService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchCombo(id);
      }
    });
  }
  public setCombo(f: Combo) {
    this.combo = f
  }
  searchCombo(Id: string) {
    this._service.getCombo(Id).subscribe({
      next: (data) => {
        this.combo = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putCombo() {
    this._service.putCombo(this.combo).subscribe({
      next: (data) => { this.combos = data },
      error: (err) => { this.errMessage = err }
    })
    alert('Edit combo success');
    this.goBack();
  }
  goBack() {
    this.router.navigate(['admincombo']);
  }
  onFileSelected(event: any, combo: Combo) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      combo.img = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };
  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
   
  // };
  
}