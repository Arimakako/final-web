// import { Component } from '@angular/core';
// import { from } from 'rxjs';
// import { ComboAPIService } from '../combo-api.service';
// import { Combo } from '../combo';
// import { Router } from '@angular/router';
// import { ComboAdminService } from '../combo-admin.service';

// @Component({
//   selector: 'app-combo-new',
//   templateUrl: './combo-new.component.html',
//   styleUrls: ['./combo-new.component.css']
// })
// export class ComboNewComponent {
//   combo=new Combo();
//   errMessage:string=''
// constructor(private _service: ComboAdminService, private _router:Router){
// }
// public setCombo(f:Combo)
// {
// this.combo=f
// }
// onFileSelected(event:any,combo:Combo) {
// let me = this;
// let file = event.target.files[0];
// let reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onload = function () {
// combo.img=reader.result!.toString()
// };
// reader.onerror = function (error) {
// console.log('Error: ', error);
// };
// }
// postCombo() {
//   if (this.combo.name == '' || this.combo.price == '') {
//     this.invalidCombo()
//   } else {
//     this._service.postCombo(this.combo).subscribe({
//       next: (data) => { this.combo = data, this.success() },
//       error: (err) => { this.errMessage = err },
//     })
//   }
// }

// invalidCombo() {
//   this.errMessage = 'Invalid combo. Full information is required'
// }

// // notify user of successful post
// success() {
//   window.alert('Combo successfully posted')
//   this.cancel()
// }

// // route admin to fashions page
// cancel() {
//   this._router.navigate(['/newcombo'])
// }
// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from '../combo';
import { ComboAPIService } from '../combo-api.service';
@Component({
    selector: 'app-combo-new',
    templateUrl: './combo-new.component.html',
    styleUrls: ['./combo-new.component.css']
  })
export class ComboNewComponent {
  combo = new Combo()
  errMessage: string = ''

  constructor(private _service: ComboAPIService, private _router: Router) { }

  public setCombo(f: Combo) {
    this.combo = f
  }

  onFileSelected(event: any, combo: Combo) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      combo.img = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postCombo() {
    if (this.combo.name == '' || this.combo.price == '' || this.combo.des == '' || this.combo.img == '') {
      this.invalidCombo()
    } else {
      this._service.postCombo(this.combo).subscribe({
        next: (data) => { this.combo = data, this.success() },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  invalidCombo() {
    this.errMessage = 'Invalid combo. Full information is required'
  }

  // notify user of successful post
  success() {
    window.alert('Combo successfully posted')
    this.cancel()
  }

  // route admin to fashions page
  cancel() {
    this._router.navigate(['/admincombo'])
  }
}