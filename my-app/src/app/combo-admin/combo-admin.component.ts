// import { Component } from '@angular/core';
// import { ComboAPIService } from '../combo-api.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-combo-admin',
//   templateUrl: './combo-admin.component.html',
//   styleUrls: ['./combo-admin.component.css']
// })
// export class ComboAdminComponent {
//   combos: any;
//   errMessage: string = ''
//   constructor(public _service: ComboAPIService, private _router: Router) {
//     this.getCombos()
//   }

//   getCombos() {
//     this._service.getCombos().subscribe({
//       next: (data) => { this.combos = data },
//       error: (err) => { this.errMessage = err }
//     })
//   }

//   createCombo() {
//     this._router.navigate(['newcombo'])
//   }

//   updateCombo(comboId: string) {
//     this._router.navigate(['updatecombo', comboId])
//   }

//   deleteCombo(comboId: string) {
//     // confirm delete
//     if (confirm("Are you sure to delete this combo?")) {
//       this._service.deleteCombo(comboId).subscribe({
//         next: (data) => { this.combos = data, this.getCombos();
//           window.location.reload(); // Reload the page
//          },
//         error: (err) => { this.errMessage = err }
//       })
//       this.getCombos()
//     }
//   }
// }
import { Component } from '@angular/core';
import { ComboAPIService } from '../combo-api.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-combo-admin',
    templateUrl: './combo-admin.component.html',
    styleUrls: ['./combo-admin.component.css']
  })
export class ComboAdminComponent {
  combos: any;
  errMessage: string = ''
  constructor(public _service: ComboAPIService, private _router: Router) {
    this.getCombos()
  }

  getCombos() {
    this._service.getCombos().subscribe({
      next: (data) => { this.combos = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createCombo() {
    this._router.navigate(['newcombo'])
  }

  updateCombo(comboId: string) {
    this._router.navigate(['updatecombo', comboId])
  }

  detailCombo(comboId: string) {
    this._router.navigate(['', comboId])
  }

  deleteCombo(comboId: string) {
    // confirm delete
    if (confirm("Are you sure to delete this combo?")) {
      this._service.deleteCombo(comboId).subscribe({
        next: (data) => { this.combos = data, this.getCombos();
          window.location.reload(); // Reload the page
         },
        error: (err) => { this.errMessage = err }
      })
      this.getCombos()
    }
  }
}